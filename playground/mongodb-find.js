// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect')
    }
    console.log('Connect to server')
    const db = client.db('TodoApp')

    // db.collection('Todos').find(
    //     // _id: '5c3d8333c71a8f20186dd209'
    //     // _id: new ObjectID('5c3f429d680bad51e436058c')
    // ).count().then((count)=>{
    //     console.log('Todos count: ' + count)
    //     // toArray
    //     // console.log(JSON.stringify(docs, undefined, 2))
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({name: 'James Hardun'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err)=>{
        console.log('Unable to fetch', err)
    })

    // client.close();
});