import Client from "../../services/database";


export async function get({request}) {
    let data = [];
    const client = await Client;
    for await (const key of client.scanIterator({TYPE: 'hash', MATCH: 'products:*',})) {
        let obj = await client.hGetAll(key);
        data.push(obj);
    }
    console.log(data);
    return {
        body: {
            data
        }
    }
}