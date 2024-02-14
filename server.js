const express = require('express');
const app = express();
const axios = require('axios').default;
const client = require('./client');
const { json } = require('body-parser');

app.get('/', async(req, res) => {

    const cachedValue = await client.get('todos');
    if(cachedValue){
        console.log('serving from cache');
        return res.json(JSON.parse(cachedValue));
    }

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30);
    return res.json(data);
})
app.listen(5000);