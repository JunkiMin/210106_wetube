import express from "express"
import { videos,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo,
  getUpload,
  postUpload
} from "../controllers/videoController";
import { onlyPrivate, uploadVideo } from "../middlewares";
import route from "../routes";

const videoRouter = express.Router();

videoRouter.get( route.home,videos );  //  한번 라우팅 거쳐옴
videoRouter.get( route.upload,onlyPrivate,getUpload ); //  한번 라우팅 거쳐옴 /videos/upoad
videoRouter.post( route.upload,onlyPrivate,uploadVideo,postUpload ); //  한번 라우팅 거쳐옴 /videos/upoad
videoRouter.get( route.videoDetail(),videoDetail ); // /videos/vdetail
videoRouter.get( route.editVideo(),onlyPrivate,getEditVideo ) ; // /videos/user :id/edit
videoRouter.post( route.editVideo(),onlyPrivate,postEditVideo ) ; // /videos/user :id/edit
videoRouter.get( route.deleteVideo(),onlyPrivate,deleteVideo ) ; // videos/user :id/delete
console.log("VIDEOROUTER is working now");
export default videoRouter;