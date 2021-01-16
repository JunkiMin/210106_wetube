//import {videoData} from "../db"
import route from "../routes"
import Video from "../models/Video"



export const home = async(req,res)=>{
    
    try{ //try and Catch를 쓰는이유 조금더 자세히 생가갷보기
        const videoData = await Video.find({});
        res.render("home",{pageTitle : "home", videoData});
        
        //console.log(videoData);
    }catch(error){
        console.log(error);
        
        res.render("home",{pageTitle : "home", videos:[] });
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


export const videoDetail = async(req,res) =>  {
    const{
        params:{id}
    }=req;

    try {    console.log(req.params);
        const video = await Video.findById(id);
        console.log("Video Value : ",video)
        res.render("videoDetail",{pageTitle : "videoDetail",video });
    }catch(error){
        console.log("에러임",error);
        res.redirect(route.home);
    
    }


};

export const getEditVideo = async (req,res) => {
    
    const{
        params: {id}
    }=req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo",{pageTitle : `Edit ${video.title}`,video});
    }catch(error){
        res.redirect(route.home);
    }
};


export const postEditVideo = (req,res) => {

    const{
        params: {id}
    }=req;
    
};




export const deleteVideo = (req,res) => res.render("deleteVideo",{pageTitle : "deleteVideo"});