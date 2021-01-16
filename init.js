import app from "./app.js"; //  ./ 은 니 파일로부터,     app.js -->export default app;
import "./db"; //For Security and data base
import dotenv from "dotenv" // For Security 
dotenv.config(); //For Security and data base
import "./models/Video"
import "./models/Comment"
const PORT = process.env.PORT || 4000;

const handdleListening = () => console.log(` V Listening on : http://localhost:${PORT}`);

app.listen(PORT,handdleListening); // 