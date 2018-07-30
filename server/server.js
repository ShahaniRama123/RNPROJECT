const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.json({msg: "server worked"})
})

app.post('/login',(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.password);
})

app.listen(4000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is working on 4000");
    }
})