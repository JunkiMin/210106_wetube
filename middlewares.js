import multer from "multer";
import route from "./routes";
import express from "express";

const storage = multer.memoryStorage();
const fileUpload = multer({storage});


// const storage  = multer.diskStorage({ // 2
//     destination(req, file, cb) {
//       cb(null, 'uploadedFiles/');
//     },
//     filename(req, file, cb) {
//       cb(null, `${Date.now()}__${file.originalname}`);
//     },
//   });

const app = express();
const multerVideo = multer({dest:"uploads/videos/"}) // If you write "/uploads/videos/", It porinted your root directory maybe C:\
const multerAvatar = multer({dest:"uploads/avatar/"})
//const multerAvatarStorage = multer({ storage });

// This middleware acts like global variable...
export const localsMiddleWare = (req,res,next) => {
    res.locals.siteName = "WeTube!";
    res.locals.routes = route;
    res.locals.test= "this is test text for localsMiddleWare"
    res.locals.loggedUser = req.user || null;
    console.log("V========middleweare req.user : ======V \n " ,req.user)
    //console.log("V========middleweare req : ======V \n " ,req.file)
    console.log("localmiddleware");
    next();
};


export const onlyPublic = (req,res,next) => {
    if(req.user){
        res.redirect(route.home);
    }else{
        next();
    }
}

export const onlyPrivate = (req,res,next) => {
    if(req.user){
        next();
    }else{
        res.redirect(route.home);
    }
}

app.use('/*', fileUpload.single('file'));
export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
//export const ulpoadAvatarStorage = multerAvatarStorage.single("avatar");