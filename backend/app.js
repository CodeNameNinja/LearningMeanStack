const express = require('express');
const app = express();
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.setHeader("Access-Contol-Allow-Headers","Origin, X-Requested-Width, Content-Type, Accept")
    res.setHeader("Access-Contol-Allow-Methods","GET,POST, PATCH, DELETE, OPTIONS")
    next();
});

app.use('/api/posts',(req,res,next) => {
    const posts = [
        { 
        id:'fasd123',
        title: 'First server side post',
        content:'this.is my first post from the server'
        },
        { 
        id:'kbjbds58',
        title: 'Second server side post',
        content:'this.is my Second post from the server'
        },
        { 
        id:'fnadj14u89',
        title: 'Third server side post',
        content:'this.is my Third post from the server'
        }
    ]
    res.status(200).json({
        message:'Posts fetched succesfully!',
        posts:posts
    })
})

module.exports = app;