import app from "./src/app.js";

const port = process.env.PORT || 8080;

app.listen(port, () =>{
  console.log(`Servidor escutando de http://localhost:${port}/api/v1/user`);
})