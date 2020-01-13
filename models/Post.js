const mongoose=require('mongoose');

const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Posts',PostSchema);