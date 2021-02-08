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
        
        res.render("home",{pageTitle : "home", videoData:[] });
    }

};



export const search = async(req,res) => {
    // const searchingBy = req.query.term; = > ES6 이전방식
    const {
        query: {term:searchingBy}
    } =req;

    let videoData = [];

    try{
        videoData = await Video.find({
            title:{$regex:searchingBy, $options:"i"}
    });

    }catch(error){
        console.log("Search Error ===>",error);
    };



    console.log(searchingBy);
    res.render("search",{pageTitle : "search", searchingBy,videoData});
    

};


export const videos = (req,res) => res.render("videos",{pageTitle : "videos"});


export const getUpload = (req,res) => res.render("upload",{pageTitle : "upload"});

export const postUpload = async(req,res) => {
    const {
        body: { title , description },
        file: {path}//:{file,title,description}
    }=req; // 결국은 title = req.body.title ,  = path = req.file.path


    console.log("postUpload title and path :",title,path)
    console.log("req.body.title====>",req.body.title)
    console.log("req.file.path====>",req)
    //console.log("req.file.fieldname===>",fieldname)
    //console.log("postUpload req=====>",req)

const newVideo =await Video.create({
    fileUrl:path,
    title,
    description,
    creator:req.user.id
})
 //To do: Upload and save Video
   // console.log(body.title,file.path)
   req.user.videos.push(newVideo.id);
   req.user.save();
    console.log("newvideo===>",newVideo);
    res.redirect(route.videoDetail(newVideo.id));


};


export const videoDetail = async(req,res) =>  {
    const{
        params:{id}
    }=req;


    try {    console.log(req.params);
        const video = await Video.findById(id).populate('creator');
        console.log("Video Value : ",video)
        res.render("videoDetail",{pageTitle : "videoDetail",video });
    }catch(error){
        console.log("에러임",error);
        res.redirect(route.home);
    
    }


};

export const getEditVideo = async (req,res) => {
    
    const{
        params: {id} // params 은 존재하지 않고 id만 존재하게됨
    }=req;
    try{
        const video = await Video.findById(id);
        if(video.creator != req.user.id){
            throw Error();
        }else{
            res.render("editVideo",{pageTitle : `Edit ${video.title}`,video});
        }

    }catch(error){
        res.redirect(route.home);
    }
};


export const postEditVideo = async(req,res) => {
    const {
        params: { id },
        body: { title, description }
      } = req;

      console.log(title)





      try {
        console.log("current title des before eddding : ",title,description);
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(route.videoDetail(id));
        
      } catch (error) {
        res.redirect(route.home);//ddd
      }
    };




export const deleteVideo = async (req,res) => {

    const{
        params: {id} // params 은 존재하지 않고 id만 존재하게됨
    }=req;


    try{
        const video = await Video.findById(id);
        if(video.creator != req.user.id){
            throw Error();
        }else{    
            await Video.findOneAndRemove({ _id: id });
           }
        

    }catch (error){   console.log(error);
    }

    res.redirect(route.home);
    // res.render("deleteVideo",{pageTitle : "deleteVideo"});
};