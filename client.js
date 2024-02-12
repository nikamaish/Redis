const {Redis} = require('ioredis');
// we are requiring the ioredis library and storing the Redis class in a variable called Redis.
// ioredis is a popular library for connecting to a Redis server from a Node.js application. here {Redis } is a class of ioredis library.

const client = new Redis()   
// what we did here is we created a new instance of Redis and stored it in a variable called client.
// so client is object of Redis class, which we used to run on port 6379.

module.exports = client;

// how string.js file is connected with redis server?
// we are using ioredis library to connect with redis server.



