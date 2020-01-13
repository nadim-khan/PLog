const express=require('express');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');

require('dotenv/config');


port=3000;

var currentdate = new Date();
var date = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();


//DB connection
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },(err)=>{
    if(!err){
        console.log("\n["+date+"] - Succesfully connected to DB ["+process.env.DB_CONNECTION+"] ");
    }else{
        console.log("\n["+date+"] - Error connecting to DB "+JSON.stringify(err,undefined,2));
    }
})

 app.use(cors())
//Middlewares (executes when specific routes hit)
app.use(bodyParser.json());
//(Import routes)
const postsRoute=require('./routes/posts');
const themeRoute=require('./routes/themes');
app.use('/posts',postsRoute)
app.use('/themes',themeRoute)

//ROUTES
app.get('/',(req,res)=>{
    res.send("We are on home");
})

app.listen(port,() => {
    console.clear()
    console.log("\n**************************************\n \t App Logs   \n\n**************************************");
    console.log("\n["+date+"] - Server started at port : "+port);
})