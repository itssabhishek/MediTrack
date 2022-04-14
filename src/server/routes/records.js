const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../Database/connection');

// This help converts the id from string to ObjectId for the _id.
// const ObjectId = require('mongodb').ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route('/record').get(function (req, res) {
    let db_connect = dbo.getDb('MediTrack');
    db_connect
        .collection('users')
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you get a single record by id
recordRoutes.route('/record/:id').get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { email: req.params.id };
    db_connect.collection('users').findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route('/record/add').post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        googleId: req.body.googleId,
        name: req.body.name,
        email: req.body.email,
    };

    //First check whether user already exist or not if not then add it into database
    db_connect
        .collection('users')
        .findOne({ email: myobj.email }, function (err, result) {
            if (!result) {
                db_connect
                    .collection('users')
                    .insertOne(myobj, function (err, res) {
                        if (err) throw err;
                        console.log('added');
                        response.json(res);
                    });
            } else response.json(result);
        });
});

// This section will help you to insert schedule record by id.
recordRoutes.route('/insert/:id').post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { email: req.params.id };

    console.log(req.body);
    db_connect
        .collection('users')
        .updateOne(myquery, { $push: { schedule: req.body } });
});

// This section will help you update Remaining Stock of medicine
recordRoutes.route('/update/:id').post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = {
        email: req.params.id,
    };

    console.log(req.body);
    db_connect.collection('users').updateOne(myquery, {
        $set: { schedule: req.body },
    });
});

// This section will help you delete a record
recordRoutes.route('/:id').delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { email: req.params.id };
    db_connect.collection('users').deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log('1 document deleted');
        response.json(obj);
    });
});

module.exports = recordRoutes;
