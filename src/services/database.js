import mysql from 'mysql2';
import { promisify } from 'util';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'martynas_n',
    password: 'kotlinmeme',
    database: 'projektas'
});

let database = {};
database = {
    query: async (query) => new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if(err) reject(err);
            resolve(result);
        })
    })
}

export default database;