const { request } = require('express');
const exp = require('express')
const userApp = exp.Router();
const expressAsyncHandler = require('express-async-handler') //to handle asynchronous errors
const jwt = require('jsonwebtoken')


//to extract the data from the body
userApp.use(exp.json())

userApp.get('/getusers',expressAsyncHandler(async (request,response)=>{

    let userCollectionObj = request.app.get("userCollectionObj")
    let userarr = await userCollectionObj.find().toArray();//retrieves the individual documents and packs it into array.

    response.send({message:"Users retrieved",payload:userarr})
}))


userApp.post('/update-user',expressAsyncHandler(async (request,response)=>{

    //after the collection is set to send, we need to use get method to take the collection object from the index.js
    let userCollectionObj = request.app.get("userCollectionObj")//we use request since app belongs to index.js but not to api so....
    let userObj = request.body;

    let resultObj = await userCollectionObj.findOne({token:userObj.token})//control is not sent to next statements until this insert operation is done.

    let result = await userCollectionObj.updateOne({token:userObj.token},{$set:userObj})

    response.send({message:"User created successfully"});


}))


userApp.post('/create-user',expressAsyncHandler(async (request,response)=>{

    //after the collection is set to send, we need to use get method to take the collection object from the index.js
    let userCollectionObj = request.app.get("userCollectionObj")//we use request since app belongs to index.js but not to api so....
    let userObj = request.body;

    let result = await userCollectionObj.insertOne(userObj)//control is not sent to next statements until this insert operation is done.
    //let resultant = await userCollectionObj.updateOne({Firstname:userObj.Firstname},{$set:{token:usertoken}})
    response.send({message:"User created successfully"});


}))

userApp.post('/Login',expressAsyncHandler(async(request,response)=>{

    let signupCollectionObj = request.app.get("signupCollectionObj")
    let signupObj = request.body;
    let res = await signupCollectionObj.findOne({username:signupObj.username,password:signupObj.password})
    console.log(res)
    if(res===null){
        //let result = await signupCollectionObj.insertOne(signupObj)

        response.send({message:"Incorrect username or password"});

    }
    else{
        //response.send({message:"username already taken",payload:res})
        console.log('hello')
        let token=jwt.sign({username:res.username},'abcde',{expiresIn:60})
        console.log(token)
        response.send({message:'login success',payload:token,user:res})

    }

}))


userApp.post('/signup',expressAsyncHandler(async(request,response)=>{

    let signupCollectionObj = request.app.get("signupCollectionObj")
    let signupObj = request.body;
    let res = await signupCollectionObj.findOne({username:(signupObj.username)})
    if(res===null){
        let result = await signupCollectionObj.insertOne(signupObj)

        response.send({message:"user registered"});

    }
    else{
        response.send({message:"username already taken",payload:res})
    }

}))


module.exports = userApp;