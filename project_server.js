//import { readFile } from 'fs/promises';
import express from "express";
import routes from "./src/routes/postsRoutes.js";
const app = express();

routes(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
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