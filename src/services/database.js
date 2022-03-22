import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./db');


const database = {
    query: async (query, params) =>  new Promise((resolve, reject) => {
        db.run(query, params, (err) => {
            if(err) reject(err);
            resolve();
        })
    }),
    select: async (query, params) =>  new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if(err) reject(err);
            resolve(rows);
        })
    })
};

export default database;