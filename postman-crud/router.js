const express = require("express");
const { json } = require("express/lib/response");
const { async } = require("jshint/src/prod-params");
const router =express.Router();
const infoRouter =require("./infoSchema")
//create 
router.post("/",async(req,res) =>
{
    
    var data =new infoRouter({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
        
    })
    await data.save();
    res.json(data);
})
//getAll
router.get("/",async(req,res) =>{
    var finddata = await infoRouter.find();
    res.json(finddata);
})
//update
router.put("/update",async(req,res) => {
    var Update = await infoRouter.updateOne({_id:req.body._id},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    }});
    res.json(Update);
})
//delete..
router.delete("/del/:id",async(req,res) => {
    var datadelete =await infoRouter.findByIdAndRemove(req.params.id).then(e => {
        res.json({message:"this id was deleted"})
    })
    })
router.get("/",(req,res) => {
 res.json("iam router file");
});


module.exports= router;