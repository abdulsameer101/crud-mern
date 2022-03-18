//third party module
const express =require("express");
const app =express();
const mongoose =require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
// app .use("/",(req,res)=>{
//     res.json("hi firends")
// })

//Midleware this is use in postman
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
//router 
const infoRouter =require("./router")
app.use("/info",infoRouter);

//Listen port
app.listen(5000,() => {
    console.log("server started on 5000");
})
//db conection
mongoose.connect('mongodb://localhost/demo',(err)=>{
    if(!err){
        console.log("mongodb conection success");
    }else{
        console.log("db conection failed");
    }
});