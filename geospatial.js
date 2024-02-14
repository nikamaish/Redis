const client = require('./client');

async function init(){
    const result1 = await client.geoadd('Sicily', 13.361389, 38.115556, 'Palermo');
    console.log('result1 ->', result1); //it gives 1, which means 1 element is added to the set. sicily is a set, which contains the coordinates of palermo. can i name the set anything? yes, you can name the set anything.

    const result2 = await client.geoadd('Sicily', 15.087269, 37.502669, 'Catania');
    console.log('result ->', result2); //it gives 1, which means 1 element is added to the set.

    const result3 = await client.geodist('Sicily', 'Palermo', 'Catania');
    console.log('result3 ->', result3); //it gives 166274.1516, which means the distance between Palermo and Catania is 166274.1516 meters.

    // const result4 = await client.geohash('Sicily', 'Palermo', 'Catania');
    // console.log('result4 ->', result4); //it gives [ 'sqc8b49rny0', 'sqdtr74hyu0' ], which means the geohash of Palermo is sqc8b49rny0 and the geohash of Catania is sqdtr74hyu0.
    // geo hash is a way to encode a location into a string. we can use this string to represent the location in a compact way.

    // const result5 = await client.geosearch('Sicily', 13.583333, 37.316667, 100, 'km', { WITHDIST: true, WITHCOORD: true, WITHHASH: true });

    // console.log('result5 ->', result5); //it gives [ [ 'Palermo', '166274.1516' ] ], which means the location within 100 km of the given location is Palermo.

}
init()  

