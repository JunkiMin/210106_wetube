import express from "express";
import route from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword
}from "../controllers/userController"

const userRouter = express.Router();



userRouter.get(route.home,users);
userRouter.get(route.editProfile,editProfile);
userRouter.get(route.changePassword,changePassword);
userRouter.get(route.userDetail,userDetail);

export default userRouter;




// userRouter.get("/",(req,res)=> res.send('user index'));
// userRouter.get("/edit",(req,res)=>res.send('user edit'));
// userRouter.get("/password",(req,res)=>res.send('user password'));








