const client = require('./client');
// we are requiring the client.js file and storing the exported object in a variable called client.

async function init(){

    await client.set('msg:3', 'Yes!')
    const result = await client.get('msg:3');
    console.log('result ->', result);

    //    await client.set('msg:4', 'Hello, World!', 'EX', 10);
    
    // we can expire the keys, so that they are automatically deleted after a certain time.
    // we can use this feature to implement a simple cache.
    // like cache keys can be expired after a certain time. we dont need to store them forever.
    // our database is separate from our cache. we can use cache to store the most frequently accessed data.

}

// how to run this file?
// node string.js

init();