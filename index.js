const express = require('express');
const app =express();
const port =process.env.PORT || 5000;

const users =[
    {id:1,name:'Tanzid',Address:'Dhaka',email:'info1@gmail.com'},
    {id:2,name:'Marzan',Address:'Dhaka',email:'info2@gmail.com'},
    {id:3,name:'Anan',Address:'Dhaka',email:'info3@gmail.com'},
    {id:4,name:'Tanzid anan',Address:'Dhaka',email:'info4@gmail.com'},
]

app.get('/' ,(req,res) =>{
    res.send('user management port running')
})
app.get('/users',(req,res) =>{
    res.send(users)
})


app.listen(port,() =>{
    console.log(`surver is running Port ${port}`)
})