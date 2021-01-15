import route from "./routes";
import multer from "multer";

const multerVideo = multer({dest:"uploads/videos/"}) // If you write "/uploads/videos/", It porinted your root directory maybe C:\

export const localsMiddleWare = (req,res,next) => {
    res.locals.siteName = "WeTube!";
    res.locals.routes = route;
    res.locals.user={
        isAuthenticated:true,
        id:1
    };
    next();
};


export const uploadVideo = multerVideo.single("videoFile");
