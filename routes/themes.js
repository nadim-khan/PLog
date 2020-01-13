const express=require('express');

const router=express.Router();
const Theme=require('../models/Theme');

var currentdate = new Date();
var date = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
    
//Gets all the THEMES
router.get('/',async(req,res)=>{
    try{
        const themes= await Theme.find();
        res.json(themes)
        console.log('\n['+date+'] - Request for All the Themes : ',themes)
    }catch(err){
        res.json({message:err});
    }
});
//Gets a specific Theme
router.get('/:themeId',async(req,res)=>{
    try{
        const themesById= await Theme.findById(req.params.themeId);
        res.json(themesById);
        console.log('\n['+date+'] - Reques for Theme with ID [ '+req.params.themeId+' ] Required Theme : ',themesById)
    }catch(err){
        res.json({message:err});
    }
});
//Submits a the Themes
router.post('/',async(req,res)=>{
  const theme= new Theme({
      title:req.body.title,
      headerImgUrl:req.body.headerImgUrl,
      bodyImgUrl:req.body.bodyImgUrl
  });
    try{
        const savedTheme= await theme.save();
        res.json(savedTheme)
        console.log('\n['+date+'] - Theme saved : ',savedTheme)
    }catch(err){
        res.json({message:err});
    }

});

//Update Theme
router.patch('/:themeId',async(req,res)=>{
    try{
        const updateTheme= await Theme.updateOne(
            {_id:req.params.themeId},
            {$set: {
                title:req.body.title,
                headerImgUrl:req.body.headerImgUrl,
                bodyImgUrl:req.body.bodyImgUrl
                }
            }
        );
        res.json(updateTheme)
        console.log('\n['+date+'] - Theme Updated : ',updateTheme)
    }catch(err){
        res.json({message:err})
        console.log('\n['+date+'] - Theme Updated err: ',err)
    }   
})

//Delete Theme
router.delete('/:themeId',async(req,res)=>{
    try{
        const delTheme=await Theme.findByIdAndRemove({_id:req.params.themeId});
        res.json(delTheme);
    }catch(err){
        res.json({message:err})
    }
})

router.get('/specific',(req,res)=>{
    res.send("We are on specific Theme")
})


module.exports=router;