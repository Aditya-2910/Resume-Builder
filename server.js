const exp = require('express')
const app = exp()
const mclient = require('mongodb').MongoClient;
const userApp = require('./APIs/userApi');
const jwt = require('jsonwebtoken');

//importing path module for the connection of build with server.js
const path = require('path');
const { response } = require('express');

//connecting build with the server.js file
app.use(exp.static(path.join(__dirname,'./build')))



//connection with mongodb atlas
const DBurl = "mongodb+srv://Newuser-29:Newuser-29@asrinivascluster.gddxiog.mongodb.net/?retryWrites=true&w=majority";


//creating seperate routes for userapi
app.use('/user-api',userApp)

//dealing with page refresh//'*' operator is used to inform that any path name except the above mentioned names will be considered here.
app.use('*',(request,response)=>
{
    response.sendFile(path.join(__dirname,'./build/index.html')) //instead of sending the response msg we need to send the file hence the method sendFile.
})



///connect with mongodb server
mclient.connect(DBurl)
.then((client)=>{

    //client method is used to create a database. which returns a databaseobj
    let dbobj = client.db('Trial1')

    //creating collection

    let userCollectionObj = dbobj.collection("userCollection");
    let signupCollectionObj = dbobj.collection("signupCollection");

    //for sharing the object with the APIs
    app.set("userCollectionObj",userCollectionObj)
    app.set("signupCollectionObj",signupCollectionObj)

    console.log('Database connection success')
})
.catch(err=>console.log('error is ',err))



//to retrieve the data from the body of http
app.use(exp.json())





//for invalid path
app.use((request,response,next)=>{response.send({message:"Invalid path"})})



//for syntax error
app.use((error,request,response,next)=>{response.send({message:'${error.message}'})})

app.listen(4000,()=>console.log("App listening at port 4000..."));