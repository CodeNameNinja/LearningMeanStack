const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.json());
const Post = require('./models/post')

mongoose.connect('mongodb+srv://mitchell:RGIJXGPKyrKhmumW@cluster0-m110y.mongodb.net/node-angular?retryWrites=true&w=majority')
        .then(()=>{
            console.log("connected to mongo database")
        })
        .catch((e)=>{
            console.log(`Failed to connect to database ${e}`)
        })

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-Width, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT, PATCH, DELETE, OPTIONS")
    next();
});
app.post("/api/posts" , (req,res,next) => {
    const post = new Post({
        title:req.body.title,
        content:req.body.content
    });
    post.save().then((createdPost)=>{
        res.status(201).json({
            message:'Post added Succesfully',
            postId:createdPost.id
        })
    })
   
});
app.put("/api/posts/:id",(req,res,next)=>{
    const post = new Post({
        _id:req.body.id,
        title:req.body.title,
        content:req.body.content
    })
    Post.updateOne({_id:req.params.id},post).then(result=>{
        console.log(result);
        res.status(200).json({message:"Update Succesful"})
    })
})
app.get('/api/posts',(req,res,next) => {
    Post.find().then(documents => {
        res.status(200).json({
            message:'Posts fetched succesfully!',
            posts:documents
        })
    }).catch((e)=>
    console.log(`couldent fetch posts ${e}`));

})
app.delete("/api/posts/:id",(req,res,next)=>{
    Post.deleteOne({_id:req.params.id}).then((result)=>{
        console.log(result);
        res.status(200).json({message:"Post deleted"});
    }).catch((error)=>{
        console.log(error)
    })
   
})
module.exports = app;