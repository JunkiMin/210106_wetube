import express from "express";
import routes from "../routes";
import {home,search,videos,upload,videoDetail,editVideo,deleteVideo} from "../controllers/videoController";
import {join,login,logout} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home,home);
globalRouter.get(routes.login,login);// globalRouter.get(routes.login,(req,res)=>res.send('Login') );
globalRouter.get(routes.logout,logout);// globalRouter.get(routes.logout,(req,res)=>res.send('Logout') );
globalRouter.get(routes.join,join); // globalRouter.get(routes.join,(req,res)=>res.send('Join ') );
globalRouter.get(routes.search,search)
// globalRouter.get(routes.videos,videos);
// globalRouter.get(routes.upload,upload);
// globalRouter.get(routes.videoDetail,videoDetail);
// globalRouter.get(routes.editVideo,editVideo);
// globalRouter.get(routes.deleteVideo,deleteVideo);


export default globalRouter;