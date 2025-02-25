const express=require('express');
const app=express();

//middleware
// app.use('/home',(req,res)=>{
//     // console.log(req);
//     res.send('<h1>Response from server</h1>');
//     console.log(res);
    
// });

app.get('/thakgaaye',(req,res)=>{
    res.send('<h1>response from my rout->thakna mana hai</h1>')
})
app.get('/happy',(req,res)=>{
    res.send('<h1>response from my rout->Keep smiling</h1>')
})
app.get('/thanks',(req,res)=>{
    res.send('<h1>response from my rout->thank you</h1>')
})
app.get('/changes',(req,res)=>{
    res.send("hello jii")
})




app.listen(8080,()=>{
    console.log('Server is running at port 8080');
    
});