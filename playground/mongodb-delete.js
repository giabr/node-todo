// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect')
    }
    console.log('Connect to server')
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Play Yours'}).then((res)=>{
    //     console.log(res)
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Hello'}).then((res)=>{
    //     console.log(res)
    // })

    //find One And Delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res)=>{
    //     console.log(res)
    // })

    // Challenge
    db.collection('Users').deleteMany({name: 'James Hardun'}).then((res)=>{
        console.log(res)
    })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c3d84390ddb281bb4c7c1d9')
    }).then((res)=>{
        console.log(res)
    })

    client.close()
});