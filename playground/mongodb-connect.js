// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect')
    }
    console.log('Connect to server')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something here',
    //     completed:  false
    // }, (err,res)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(res.ops), undefined, 2)
    // })

    db.collection('Users').insertOne({
        name: 'James Hardun',
        age: 22,
        location: 'Kadugede'
    }, (err,res)=>{
        if(err){
            return console.log('Unable to connect server')
        }

        console.log(JSON.stringify(res.ops[0]._id.getTimestamp()))
    })
    client.close()
});