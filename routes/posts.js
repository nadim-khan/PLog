const express=require('express');

const router=express.Router();
const Post=require('../models/Post');

var currentdate = new Date();
var date = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
    
//Gets all the POSTS
router.get('/',async(req,res)=>{
    try{
        const posts= await Post.find();
        res.json(posts)
        console.log('\n['+date+'] - Request for All the posts : ',posts)
    }catch(err){
        res.json({message:err});
    }
});
//Gets a specific post
router.get('/:postId',async(req,res)=>{
    try{
        const postsById= await Post.findById(req.params.postId);
        res.json(postsById);
        console.log('\n['+date+'] - Reques for Post with ID [ '+req.params.postId+' ] Required Post : ',postsById)
    }catch(err){
        res.json({message:err});
    }
});
//Submits a the POSTS
router.post('/',async(req,res)=>{
  const post= new Post({
      title:req.body.title,
      description:req.body.description,
      imageUrl:req.body.imageUrl,
      date:req.body.date
  });
    try{
        const savedPost= await post.save();
        res.json(savedPost)
        console.log('\n['+date+'] - Post saved : ',savedPost)
    }catch(err){
        res.json({message:err});
    }

});

//Update Post
router.patch('/:postId',async(req,res)=>{
    try{
        const updatePost= await Post.updateOne(
            {_id:req.params.postId},
            {$set: {title:req.body.title}}
        );
        res.json(updatePost)
        console.log('\n['+date+'] - Post Updated : ',updatePost)
    }catch(err){
        res.json({message:err})
        console.log('\n['+date+'] - Post Updated err: ',err)
    }   
})

//Delete Post
router.delete('/:postId',async(req,res)=>{
    try{
        const delPost=await Post.findByIdAndRemove({_id:req.params.postId});
        res.json(delpost);
    }catch(err){
        res.json({message:err})
    }
})

router.get('/specific',(req,res)=>{
    res.send("We are on specific posts")
})


module.exports=router;