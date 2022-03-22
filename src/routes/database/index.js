import client from "../../services/database";


export async function get({request}) {
    const data = [];
    for await (const key of client.scanIterator({TYPE: 'hash', MATCH: 'products:*',})) {
        data.push(await client.hGetAll(key));
      }
    console.log(data);
    return {
        body: {
            data
        }
    }
}