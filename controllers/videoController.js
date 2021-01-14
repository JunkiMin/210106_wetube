//import {videoData} from "../db"
import route from "../routes"



export const home = (req,res)=>res.render("home",{pageTitle : "home", videoData});




export const search = (req,res) => {
    // const searchingBy = req.query.term; = > ES6 이전방식
    const {
        query: {term:searchingBy}
    } =req;
    console.log(searchingBy);
    res.render("search",{pageTitle : "search", searchingBy,videoData});
    

};


export const videos = (req,res) => res.render("videos",{pageTitle : "videos"});



export const getUpload = (req,res) => res.render("upload",{pageTitle : "upload"});

export const postUpload = (req,res) => {
    const {
        body:{file,title,description}
    }=req;
 //To do: Upload and save Video
    console.log("videoDetail");
    res.redirect(route.videoDetail(1001));

};


export const videoDetail = (req,res) => res.render("videoDetail",{pageTitle : "videoDetail" });
export const editVideo = (req,res) => res.render("editVideo",{pageTitle : "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo",{pageTitle : "deleteVideo"});