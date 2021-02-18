
require("@babel/polyfill");
import dotenv from "dotenv" // For Security 
import app from "./app"; //  ./ 은 니 파일로부터,     app.js -->export default app;
import "./db"; //For Security and data base
//import 'babel-polyfill';

dotenv.config(); //For Security and data base
import "./models/Video"
import "./models/Comment"

import "./models/User"

const PORT = process.env.PORT || 4000;

const handdleListening = () => console.log(` V Listening on : http://localhost:${PORT}`);

app.listen(PORT, handdleListening); // 