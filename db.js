

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);


/*
export  const videoData = [

    {
        id:1001,
        title: "title : video1 is awesome this discriptinon",
        description: "discription : this is gooooood!",
        views: 24,
        videoFile:"https://www.w3schools.com/html/mov_bbb.mp4",
        creater: {
            id: "332",
            name:"Nanros",
            email:"fake@Fake.com",
        }

    },

    {
        id:1002,
        title: "title : video2 is awesome this criptinon",
        description: "discription : this is gooooood!",
        views: 24,
        videoFile:"https://www.w3schools.com/html/mov_bbb.mp4",
        creater: {
            id: "332",
            name:"Nanros",
            email:"fake@Fake.com",
        }

    },

    {
        id:1003,
        title: "title : video3 is awesome this criptinon",
        description: "discription : this is gooooood!",
        views: 24,
        videoFile: "https://www.w3schools.com/html/mov_bbb.mp4" ,
        creater: {
            id: "332",
            name:"Nanros",
            email:"fake@Fake.com",
        }

    },

    {
        id:1004,
        title: "title : video4 is awesome this criptinon",
        description: "discription : this is gooooood!",
        views: 24,
        videoFile:"https://www.w3schools.com/html/mov_bbb.mp4",
        creater: {
            id: "332",
            name:"Nanros",
            email:"fake@Fake.com",
        }

    }


];
*/