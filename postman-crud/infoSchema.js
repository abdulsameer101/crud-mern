const mongoose =require("mongoose");
//db table creation area

const infoSchema = mongoose.Schema({
    Name:{
        type:String,
        require:true,
        trim:true
      },
      Age:{
          type:Number,
          require:true,
      },
      City:{
          type:String,
          require:true,
          trim:true
      },
      createdTime:{
          type:Date,
          default:Date.now
      }
})
module.exports = mongoose.model("info",infoSchema);