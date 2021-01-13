import route from "../routes"; 
export const getJoin = (req,res) =>res.render("join",{pageTitle : "join"});
export const postJoin = (req,res)=>{
    console.log(req.body);
    
const {
    body:{name,email,password,password2}
} = req;

if(password!==password2){
    res.status(400)
    res.render("join",{pageTitle : "join"});
} else{
    // To do:  Register User
    // To DO:  log user
    res.redirect(route.home)
}

// res.render("join",{pageTitle : "join"}); => why did he move this into if statement?

};


export const getLogin = (req,res)=>res.render("login",{pageTitle : "LOGIN"});
export const postLogin = (req,res)=>res.redirect(route.home);

export const logout = (req,res)=>res.render("logout",{pageTitle : "LOGOUT"});
export const users = (req,res)=>res.render("users",{pageTitle : "users"});
export const editProfile = (req,res)=>res.render("editProfile",{pageTitle : "editProfile"});
export const changePassword = (req,res)=>res.render("changePassword",{pageTitle : "changePassword"});
export const userDetail = (req,res)=>res.render("userDetail",{pageTitle : "userDetail"});