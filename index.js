const fs=require('fs');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const index=fs.readFileSync('index.html','utf-8');
const errorPage=fs.readFileSync('error.html','utf-8');

//make server with express
const express = require('express');
const morgan = require('morgan');
const server = express();
//Third party  midleware

server.use(morgan('default'))

//Midle ware to see and check info like eventsx in solidity loger
// server.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname,new Date(),req.get('User-Agent'));
//     next();
// });//It is application level middleWare
//++++++++++++++++++Most Imp middleware++++++++++++++++
//server.use(express.static('public'));
//It mean we have folder name public in which files some files which are showing

// third party
//this midleware use to read body
//server.use(express.json())
//These are rout middle wear
let auth=((req,res,next)=>{
    // console.log(req.query.password);
    // if(req.bosy.password==="123"){
    //     next();
    // }else{
    //     res.sendStatus(401); // 401 unauthorised status
    // }
    nexft()
});
let auth2=((req,res,next)=>{
    console.log(req.query.password);
    if(req.query.password==="1234"){
        next();
    }else{
        res.sendStatus(401); // 401 unauthorised status
    }
});
server.get('/product/:id',auth,(req,res)=>{
    res.json({type:'GET'});
});
server.post('/',auth2,(req,res)=>{
    res.json({type:'POST'});
});
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'});
});
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'});
});









server.get('/demo',(req,res)=>
{
    //res.sendStatus(404);
    //res.json(data);
    res.send("Server start....")
    //res.sendFile('C:/Users/Dell/OneDrive/Desktop/Expressjs/index.html');
    //we can send also stras
    //res.status(200).send("Server start....")
});
server.listen(8080)

//https://github.com/coderdost/full-stack-dev-2023#more-info