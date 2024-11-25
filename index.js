const express = require('express');
const app =express();
const port =process.env.PORT || 5000;

app.get('/' ,(req,res) =>{
    res.send('user management port running')
})

app.listen(port,() =>{
    console.log(`surver is running Port ${port}`)
})