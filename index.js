
import express from "express";
// var express = require('express');

var app = express();

const PORT = 4000;


//GET PUT POST  DELETE

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}


function handdleHome(req,res,next){
    // console.log(req);
    res.send("Hello2");
    console.log('hi from home');
}


const handleProfile = (req,res,next) => res.send("you are on my profile");
// ▲ //function handleProfile(req,res){
//     res.send("you are on my profile");
// }

const betweenHome = (req,res,next) => {
    
    console.log("i'm between")
    // console.log(next)
    next();


};

app.get("/", handdleHome);
app.use(betweenHome);
app.get("/profile",handleProfile);
//aplication  get("directory(위치)","보낼놈(주로 CSS html임")

app.listen(PORT, handleListening);
