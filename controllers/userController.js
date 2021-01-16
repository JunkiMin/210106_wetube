import route from "../routes"; 
export const getJoin = (req,res) =>res.render("join",{pageTitle : "join"});

export const postJoin = (req,res)=>{
    console.log("console log req.body  == > ",req.body);
    
const {
    body:{name,email,password,password2}
} = req;

if(password!==password2){
    
    res.status(400)
    res.render("join",{pageTitle : "join"});
} else{
    // To do:  Register User
    // To DO:  log user
    console.log("both password is same")
    res.redirect(route.home)
}

// res.render("join",{pageTitle : "join"}); => why did he move this into if statement?

};


export const getLogin = (req,res)=>res.render("login",{pageTitle : "LOGIN"});
export const postLogin = (req,res)=>res.redirect(route.home);

export const logout = (req,res)=>{
    //toDo : Process Log Out
    //("logout",{pageTitle : "LOGOUT"})
    res.redirect(route.home);
    
};

export const users = (req,res)=>res.render("users",{pageTitle : "users"});
export const editProfile = (req,res)=>res.render("editProfile",{pageTitle : "editProfile"});
export const changePassword = (req,res)=>res.render("changePassword",{pageTitle : "changePassword"});
export const userDetail = (req,res)=>res.render("userDetail",{pageTitle : "userDetail"});