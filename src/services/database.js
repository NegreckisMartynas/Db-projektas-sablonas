import {createClient} from 'redis';


export default new Promise((resolve, reject) => {
    const client = createClient({url: "redis://127.0.0.1:6379"})
    console.log('Initializing redis');
    client.connect()
        .then(() => resolve(client))
        .catch(reject);
}).then();