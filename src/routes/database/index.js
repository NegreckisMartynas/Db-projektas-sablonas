import database from "../../services/database";


export async function get({request}) {
    const data = await database.query('SELECT * FROM items');
    return {
        body: {
            tableData: data
        }
    }
}