const exp = require('express')
const userApp = exp.Router();
const expressAsyncHandler = require('express-async-handler') //to handle asynchronous errors


//to extract the data from the body
userApp.use(exp.json())

userApp.get('/getusers',expressAsyncHandler(async (request,response)=>{

    let userCollectionObj = request.app.get("userCollectionObj")
    let userarr = await userCollectionObj.find().toArray();//retrieves the individual documents and packs it into array.

    response.send({message:"Users retrieved",payload:userarr})
}))

userApp.post('/create-user',expressAsyncHandler(async (request,response)=>{

    //after the collection is set to send, we need to use get method to take the collection object from the index.js
    let userCollectionObj = request.app.get("userCollectionObj")//we use request since app belongs to index.js but not to api so....
    let userObj = request.body;

    let result = await userCollectionObj.insertOne(userObj)//control is not sent to next statements until this insert operation is done.

    response.send({message:"User created successfully"});


}))


module.exports = userApp;