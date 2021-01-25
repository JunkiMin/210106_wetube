
import express from "express";
import morgan from "morgan"; // 어디에서 무슨일이 일어났나 기록하는 프레임워크 (ㅣlog)
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser   from "body-parser";
import passport from "passport" //  얘는 npm모듈
import mongoose from "mongoose"
 //  router.js --> export const userRouter = express.Router();
 import session from "express-session"
 import dotenv from "dotenv";
 import MongoStore from "connect-mongo"
 import { localsMiddleWare } from "./middlewares";
 import routes from "./routes";
 import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";



import "./passport" //얘는 내가만든 js 불러들이는거

dotenv.config();


const app = express();

const CookieStore = MongoStore(session)

console.log("secret key is ===> ",process.env.COOKIE_SECRET);

app.use(helmet({ contentSecurityPolicy: false, }));
app.set("view engine","pug"); // view파일들의 위치에 대한 기본적인 설정이 들어있다.
app.use("/uploads", express.static("uploads"));
app.use("/static",express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended:true } ));
app.use(morgan("dev"));
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized:false,
    store:new CookieStore({mongooseConnection:mongoose.connection}) // 이게뭔데 ㅅㅂ 대충 쿠키를 저장하겠다... 뭐 이런건데...

    }));
app.use(passport.initialize()); ///다른 미들웨어를 사용하기전 초기화
app.use(passport.session()); /// 세션에 저장??? 무슨역할일까 쿠키를 위해서.. 하는거라는데 
app.use(require('flash')());

app.use(localsMiddleWare);

app.use(routes.users,userRouter);    //app.use("/user",userRouter);
app.use(routes.videos,videoRouter); //app.use("/user",userRouter);
app.use(routes.home,globalRouter); 

//aplication  get("directory(위치)","보낼놈(주로 CSS html임")

export default app; //누군가 내 파일을 불러올때 (import, app objet를 기본적ㅇ로 반환)
