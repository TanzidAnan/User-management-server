const express = require('express');
const cors = require('cors');
const app =express();
const port =process.env.PORT || 5000;

app.use(cors())

const users =[
    {id:1,name:'Tanzid',Address:'Dhaka',email:'info1@gmail.com',password:123456},
    {id:2,name:'Marzan',Address:'Dhaka',email:'info2@gmail.com',password:123456},
    {id:3,name:'Anan',Address:'Dhaka',email:'info3@gmail.com',password:123456},
    {id:4,name:'Tanzid anan',Address:'Dhaka',email:'info4@gmail.com',password:123456},
]

app.get('/' ,(req,res) =>{
    res.send('user management port running')
})
app.get('/users',(req,res) =>{
    res.send(users)
})

app.post('/users',(req,res) =>{
    console.log('post api heating')
    console.log(res.body)
})


app.listen(port,() =>{
    console.log(`surver is running Port ${port}`)
})