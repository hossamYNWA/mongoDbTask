const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'myproject'
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,res)=>{
  if(error)
  {
      console.error("connection error")
  }
    const db=res.db(databaseName)
    //adding one doc
    db.collection('users').insertOne({name:'hossam',age:32},(error,result)=>{
        if(error){
            console.error("error inserting data")
        }
        console.log("data inserted with ID" + result.insertedId)
    })
    
    //adding many docs
    db.collection('users').insertMany([{name:'hossam',age:32},{name:"Omar",age:25},{name:"Mariam",age:25},{name:"leen",age:17}],(error,result)=>{
        if(error){
            console.error("error inserting data")
        }
        console.log("data inserted" + result.insertedCount)
    })
    
    //reading one doc
    db.collection('users').findOne({name:'hossam'},(error,user)=>{
        if(error){
            console.error("error reading data")
        }
        console.log(user)
    })
    //reading many docs
    db.collection('users').find({age:25}).toArray((error,users)=>{
        if(error){
            console.error("error reading data")
        }
        console.log(users)
    })
})