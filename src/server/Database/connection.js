const { MongoClient } = require('mongodb');
const Db =
    'mongodb+srv://abhishek:9839177870aA@cluster0.g9bwh.mongodb.net/MediTrack?retryWrites=true&w=majority';
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db) {
                _db = db.db('MediTrack');
                console.log('Successfully connected to MongoDB.');
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};
