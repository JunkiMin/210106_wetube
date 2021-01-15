//import {videoData} from "../db"
import route from "../routes"
import Video from "../models/Video"



export const home = async(req,res)=>{
    
    try{ //try and Catch를 쓰는이유 조금더 자세히 생가갷보기
        const videoData = await Video.find({});
        console.log(videoData);
    }catch(error){
        console.log(error);
        res.render("home",{pageTitle : "home", videoData});
    }

};



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

export const postUpload = async(req,res) => {
    const {
        body: { title,description},
        file: {path}//:{file,title,description}
    }=req;

const newVideo =await Video.create({
    fileUrl:path,
    title,
    description
})
 //To do: Upload and save Video
   // console.log(body.title,file.path)
    console.log(newVideo)
    res.redirect(route.videoDetail(newVideo.id));

};


export const videoDetail = (req,res) => res.render("videoDetail",{pageTitle : "videoDetail" });
export const editVideo = (req,res) => res.render("editVideo",{pageTitle : "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo",{pageTitle : "deleteVideo"});