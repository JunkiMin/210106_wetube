import express from "express"
import { videos,
        videoDetail,
        getEditVideo,
        postEditVideo,
        deleteVideo,
        getUpload,
        postUpload
       } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import route from "../routes";

const videoRouter = express.Router();

videoRouter.get( route.home,videos );  //  한번 라우팅 거쳐옴
videoRouter.get( route.upload,getUpload ); //  한번 라우팅 거쳐옴 /videos/upoad
videoRouter.post( route.upload,uploadVideo,postUpload ); //  한번 라우팅 거쳐옴 /videos/upoad
videoRouter.get( route.videoDetail(),videoDetail ); // /videos/vdetail
videoRouter.get( route.editVideo(),getEditVideo ) ; // /videos/user :id/edit
videoRouter.post( route.editVideo(),postEditVideo ) ; // /videos/user :id/edit
videoRouter.get( route.deleteVideo,deleteVideo ) ; // videos/user :id/delete

export default videoRouter;