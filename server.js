const { request, response } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const userController = require('./controllers/userController');

app.use(express.json());


app.get('/',(request,response)=>{
    response.status(200).json({message:"Hello Welcometo my User Api"});
});

app.post('/user',userController.addUser);
app.get('/user',userController.getAllUser);
app.patch('/user/:userId',userController.updatebyid);
app.delete('/user',userController.deletebyid);
app.get('/user/:userId',userController.getUserById) ;
    



app.listen(PORT,() =>{
    console.log("my server is up and running on port :",PORT);
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log('DataBase not connected ',error.message);
    });
});


