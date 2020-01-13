const mongoose=require('mongoose');

const ThemeSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    headerImgUrl:{
        type:String,
        required:true
    },
    bodyImgUrl :{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Themes',ThemeSchema);