const express = require('express') //Import library express

const app = express(); //Object of class Express


app.get('/',(request,response) => {
    response.json({
        "msg" : "I am batman"
    });
})


app.listen(4000, (err) => {
    if(err){
        console.log(err)
    }
}); //Listen to the port of the server