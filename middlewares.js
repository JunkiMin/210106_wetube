import route from "./routes";

export const localsMiddleWare = (req,res,next) => {
    res.locals.siteName = "WeTube!";
    res.locals.routes = route;
    res.locals.user={
        isAuthenticated:true,
        id:1
    };
    next();
};