
import express from "express";
import morgan from "morgan"; // 어디에서 무슨일이 일어났나 기록하는 프레임워크 (ㅣlog)
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser   from "body-parser";
 //  router.js --> export const userRouter = express.Router();
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";


// var express = require('express');
var app = express();


// ▲ //function handleProfile(req,res){
//     res.send("you are on my profile");
// }

// const betweenHome = (req,res,next) => {
    
//     console.log("i'm between")
//     // console.log(next)
//     next();

// };

// app.use(betweenHome);


app.set("view engine","pug"); // view파일들의 위치에 대한 기본적인 설정이 들어있다.

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended:true } ));
app.use(helmet());
app.use(morgan("dev"));
app.use(routes.users,userRouter);    //app.use("/user",userRouter);
app.use(routes.videos,videoRouter);
app.use(routes.home,globalRouter); 

//aplication  get("directory(위치)","보낼놈(주로 CSS html임")

export default app; //누군가 내 파일을 불러올때 (import, app objet를 기본적ㅇ로 반환)
