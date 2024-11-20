//import { readFile } from 'fs/promises';
import express from "express";

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150" },
];

const app = express();
app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
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