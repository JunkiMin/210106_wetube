import passport from "passport"
import User from "./models/User"

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser()); // 오직 userid만 쿠키에 담아라
passport.deserializeUser(User.deserializeUser()); 

// serialization(serializeUser)

// : 어떤 정보를 쿠키에 주는지,

//   즉 클라이언트 쪽 사용자에 대해 쿠키가 어떤 field를 가질 수 있는지 설정

//   쿠키는 남들에게 공개 될 수 있기 때문에 매우 작아야하고 민감한 정보를 담아서는 안됨

// deserialization(deserializeUser)

// : 쿠키를 보고 어떤 사용자인지 찾아내는 것

// => passport-local-mongoose가 모든걸 제공, 아주 쉽게 사용할 수 있음