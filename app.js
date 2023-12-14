const express = require('express');
const app = express();
const users = [
    {id:1 ,name:'pen', cost:'5$', size: 'full'},
    {id:2 ,name:'bag', cost:'10$' ,size:'full'},
    {id:3, name:'rules', cost:'15$', size:'full'},
    {id:4, name:'book', cost:'20$',size:'normal'},
    {id:5, name:'coppybook', cost:'25$', size:'big'},
    {id:6, name:'coppybook', cost:'25$', size:'big'},
    {id:7, name:'coppybook', cost:'25$', size:'big'},
    {id:8, name:'coppybook', cost:'25$', size:'big'},
    {id:9, name:'coppybook', cost:'25$', size:'big'},
    {id:10, name:'coppybook', cost:'25$', size:'big'},
]
   
app.get('/', (req,res)=>{

    res.send("home page")
})

app.get('/users', (req,res)=>{
   
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const userId = req.params.users;
    const selectedUser = users.find(user=>user.id == userId)
    // console.log(username); 
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('istifadeci yoxdur')
    }
})

app.listen(5000, ()=>{
    console.log("server quruldu");
})
  
