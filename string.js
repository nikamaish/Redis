const client = require('./client');
// we are requiring the client.js file and storing the exported object in a variable called client.

async function init(){

    await client.set('msg:3', 'Yes!')
    const result = await client.get('msg:3');
    console.log('result ->', result);

   
}

// how to run this file?
// node string.js

init();