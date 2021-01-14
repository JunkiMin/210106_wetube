import app from "./app.js"; //  ./ 은 니 파일로부터,     app.js -->export default app;
import "./db";
import dotenv from "dotenv"
dotenv.config();
import "./models/Video"
import "./models/Comment"
const PORT = process.env.PORT || 4000;

const handdleListening = () => console.log(` V Listening on : http://localhost:${PORT}`);

app.listen(PORT,handdleListening);