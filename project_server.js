//import { readFile } from 'fs/promises';
import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
//app.get("/livro", async(req, res) => {
//    try {
//        const data = await readFile("livro.json", "utf8");
//        res.status(200).json(JSON.parse(data));
//    } catch (err) {
//        console.error("Erro ao ler o arquivo:", err);
//        res.status(500).send("Erro ao carregar o livro.");
//    }
//});
//app.get("/api", (req, res) => {
//           res.status(200).send("Bem vindo o projeto aula 1 imersão Minha Experiência na Aula de Imersão Dev Back - End: Desvendando APIs e Servidores.");
//});