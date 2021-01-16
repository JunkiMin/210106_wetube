import express from "express";
import routes from "../routes";
import {home,search,videos,upload,videoDetail,editVideo,deleteVideo} from "../controllers/videoController";
import {getJoin,postJoin,getLogin,postLogin,logout} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home,home);
globalRouter.get(routes.login,getLogin);
globalRouter.post(routes.login,postLogin);// globalRouter.get(routes.login,(req,res)=>res.send('Login') );
globalRouter.get(routes.logout,logout);// globalRouter.get(routes.logout,(req,res)=>res.send('Logout') );
globalRouter.get(routes.join,getJoin); // globalRouter.get(routes.join,(req,res)=>res.send('Join ') );
globalRouter.post(routes.join,postJoin);
globalRouter.get(routes.search,search)
// globalRouter.get(routes.videos,videos);
// globalRouter.get(routes.urpload,upload);
// globalRouter.get(routes.videoDetail,videoDetail);
// globalRouter.get(routes.editVideo,editVideo);
// globalRouter.get(routes.deleteVideo,deleteVideo);
console.log("GlobalRouter is working now");

export default globalRouter;