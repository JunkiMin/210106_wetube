import passport from "passport"
import User from "../models/User"
import route from "../routes";

export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });

export const postJoin = async (req, res, next) => { //next를 넣어줌으로서 미들웨어
  console.log("1 console log req.body  == > ", req.body);

  const {
    body: { name, email, password, password2 }
  } = req;

  console.log("2 console log req.body  == > ", req.body);

  if (password !== password2) {

    res.status(400)
    res.render("join", { pageTitle: "join" });
  } else {
    try {
      // const a ={name, email}
      // const user = await User(a); // 한낱 함수입니다. 객체를 인자로 받는.

      const user = await User({ name, email }); // 한낱 함수입니다. 객체를 인자로 받는.

      console.log("user===> ", user); // pug 에서 받은 name과 email값을 가지고있는 함수
      await User.register(user, password);
      console.log("user===> ", user); // 유저 패스워드 정보가 암화화 해서 들어감 salt hash
      next();
    } catch (error) {
      console.log(error)
      res.redirect(route.home)
    }

    // To do:  Register User
    // To DO:  log user
    console.log("both password is same")

  }

  // res.render("join",{pageTitle : "join"}); => why did he move this into if statement?

};


export const getLogin = (req, res) => res.render("login", { pageTitle: "LOGIN" });
export const postLogin = passport.authenticate('local', {
  failureRedirect: route.login,
  successRedirect: route.home
})

export const logout = (req, res) => {
  req.flash("info", "Logged out, see you later");
  req.logout();
  res.redirect(route.home);

};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("videos");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(route.home);
  }
};

export const users = (req, res) => res.render("users", { pageTitle: "users" });
export const getEditProfile = (req, res) => res.render("editProfile", { pageTitle: "editProfile" });
export const postEditProfile = async (req, res) => {




  const {
    body: { name, email },
    file

  } = req;






  console.log("req.file===>", req.file)
  try {

    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl
    });

    // if (req.file === undefined ) {
    //   await User.findByIdAndUpdate(req.user.id, {
    //     name:req.body.name,
    //     email:req.body.email
    //   });     
    //   console.log("typeof req.file === undefined ===>",typeof req.file )
    // }else{
    //    //path = req.file.path
    //   await User.findByIdAndUpdate(req.user.id, {
    //     name:req.body.name,
    //     email:req.body.email,
    //     avatarUrl:  req.file.path
    //   });    
    //   console.log("typeof req.file === defined ===>",req.file )
    // }





    req.flash("success", "Profile updated");
    res.redirect(route.me);
  } catch (error) {
    req.flash("error", "Can't update profile");
    res.redirect(route.editProfile);
  }
};




// 과연 유저디테일이 쓸모가 있는가?
export const userDetail = async (req, res) => {
  console.log("----------------------------------------------------------");
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id).populate("videos");
    console.log("user in userDetail====>> \n",user)
    res.render("userDetail", { pageTitle: "User Detail", user });
    
  } catch (error) {
    req.flash("error", "User not found");
    res.redirect(route.home);
  }
};


export const getChangePassword = (req, res) => res.render("changePassword", { pageTitle: "changePassword" });


export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 }
  } = req;
  try {
    if (newPassword !== newPassword1) {
      req.flash("error", "Passwords don't match");
      res.status(400);
      res.redirect(`/users${route.changePassword}`);
      return;
    }
    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(route.home);
  } catch (error) {
    req.flash("error", "Can't change password");
    res.status(400);
    res.redirect(`/users${route.changePassword}`);
  }
};