// import express from "express";
// import route from "../routes";
// import {
//    userDetail,
//   getEditProfile,
//   getChangePassword,
//   postEditProfile,
//   postChangePassword
// }from "../controllers/userController"

// const userRouter = express.Router();



// userRouter.get(route.home,users);
// userRouter.get(route.editProfile,editProfile);
// userRouter.get(route.changePassword,changePassword);
// userRouter.get(route.userDetail(),userDetail);
// console.log("UserRouter is working now");
// export default userRouter;




// // userRouter.get("/",(req,res)=> res.send('user index'));
// // userRouter.get("/edit",(req,res)=>res.send('user edit'));
// // userRouter.get("/password",(req,res)=>res.send('user password'));



import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  //getChangePassword,
  postEditProfile,
  getChangePassword,
  postChangePassword
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;







