import http from "http";

const port = 8080;

const rotas = {
  "/": "API REST FULL",
  "/api/v1/user/:id": "API REST FULL",
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text-plain'})
  res.end(rotas[req.url]);
})

server.listen(port, () =>{
  console.log(`Servidor escutando de http://localhost:${port}`);
})