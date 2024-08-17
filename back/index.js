//método do protocolo HTTP
// padrão de acesso
// funcionalidade

// obter dados

//cadastrar nova tarefa
// POST /tarefas ()=>{}
//{"id":1,"texto":"comprar pão"}

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// GET /tarefas ()=>{}
let id = 1;
const tarefas = [];

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const texto = req.body.texto;
  const tarefa = { id, texto };
  tarefas.push(tarefa);
  id++;
  res.status(201).json(tarefa);
});

const PORT = 50000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
