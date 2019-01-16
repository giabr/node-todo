// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect')
    }
    console.log('Connect to server')
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c3f4bfc680bad51e4360702")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res)=>{
    //     console.log(res)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c3d853aedee8128f84c8fe6")
    },{
        $set: {
            name: 'Tony'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res)=>{
        console.log(res)
    })

    client.close();
});