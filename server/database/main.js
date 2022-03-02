const { MongoClient } = require('mongodb');

async function main() {
    const url =
        'mongodb+srv://abhishek:9839177870aA@cluster0.g9bwh.mongodb.net/MediTrack?retryWrites=true&w=majority';

    const client = new MongoClient(url);
    await client.connect();

    try {
        await find(client);
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

//Find
// async function find(client) {
//     const result = await client
//         .db('sample_airbnb')
//         .collection('listingsAndReviews')
//         .findOne({ name: 'Ribeira Charming Duplex' });
//
//     console.log(result);
// }
