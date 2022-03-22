import database from "../../services/database";


export async function get({request}) {
    const data = await database.select('SELECT * FROM items');
    console.log(data);
    return {
        body: {
            data
        }
    }
}