import express from "express";
import routes from "../routes";
import {home,search,videos,upload,videoDetail,editVideo,deleteVideo,deleteComment} from "../controllers/videoController";
import {getMe,getJoin,postJoin,getLogin,postLogin,logout} from "../controllers/userController";
import { onlyPublic,onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home,home);
globalRouter.get(routes.login,onlyPublic,getLogin);
globalRouter.post(routes.login,onlyPublic,postLogin);// globalRouter.get(routes.login,(req,res)=>res.send('Login') );
globalRouter.get(routes.logout,onlyPrivate,logout);// globalRouter.get(routes.logout,(req,res)=>res.send('Logout') );
globalRouter.get(routes.join,onlyPublic ,getJoin); // globalRouter.get(routes.join,(req,res)=>res.send('Join ') );
globalRouter.post(routes.join,onlyPublic,postJoin,postLogin);
globalRouter.get(routes.search,search)
globalRouter.get(routes.me, getMe);
// globalRouter.get(routes.videos,videos);
// globalRouter.get(routes.urpload,upload);
// globalRouter.get(routes.videoDetail,videoDetail);
// globalRouter.get(routes.editVideo,editVideo);
// globalRouter.get(routes.deleteVideo,deleteVideo);
console.log("GlobalRouter is working now");

export default globalRouter;