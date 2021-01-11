import express from "express"
import { videos,
        upload,
        videoDetail,
        editVideo,
        deleteVideo
       } from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get( routes.home,videos );  //  한번 라우팅 거쳐옴
videoRouter.get( routes.upload,upload ); //  한번 라우팅 거쳐옴 /videos/upoad
videoRouter.get( routes.videoDetail,videoDetail ); // /videos/vdetail
videoRouter.get( routes.editVideo,editVideo ) ; // /videos/user :id/edit
videoRouter.get( routes.deleteVideo,deleteVideo ) ; // videos/user :id/delete

export default videoRouter;