import {createClient} from 'redis';

let client = createClient({url: "127.0.0.1:6379"});

(async () => {
    await client.connect();
})();

export default client;