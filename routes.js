import { userDetail } from "./controllers/userController";

//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users

const USERS = "/users";
const EDIT_PROFILE = "/editProfile";
const CHANGE_PASSWORD = "/changePassword"; 
const USER_DETAIL = "/:id";
;


//Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete"; // 콜론: 을쓰면 id를 텍스트로 안보고 변수로 인지한다. 


const route = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users:USERS,
    userDetail (id) { 
            if (id) {
             return `/users/${id}`;
           } else {
             return USER_DETAIL;
           }
         },
    // userDetail: id => {
    //     if (id) {
    //       return `/users/${id}`;
    //     } else {
    //       return USER_DETAIL;
    //     }
    //   },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload:UPLOAD,
    videoDetail:id => {
        // console.log("리턴합니다.","return /videos/${id}")
        // return `/videos/${id}`;
        if (id) {
          console.log("리턴합니다.",`return /videos/${id}`)
          return `/videos/${id}`;
        } else {
          console.log("이프 엘스 케이스 VIDEO_DETAIL",VIDEO_DETAIL);
          return VIDEO_DETAIL;
        } // 이해가 안가는데 일단 둡니다. else없이는 함수가 작동안함.;; :id를 어떻게 상호작용하지는 지 잘 알아보아야할 필요가 있다.
      },

    editVideo: id => {
      if (id) {
        console.log("수정합니다.",`/videos/${id}/edit`)
        return `/videos/${id}/edit`;
      }else{
        return EDIT_VIDEO;
      }
    },
    



    deleteVideo: (id) => {
      if(id){
        return `/videos/${id}/delete`
      }else{
        return DELETE_VIDEO
      }
    }
}; //

export default route;