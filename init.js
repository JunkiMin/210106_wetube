import app from "./app.js" //  ./ 은 니 파일로부터,     app.js -->export default app;


const PORT = 4000;

const handdleListening = () => console.log(` V Listening on : http://localhost:${PORT}`);

app.listen(PORT,handdleListening);