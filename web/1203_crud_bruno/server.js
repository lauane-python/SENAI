const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());

// "Banco de dados" fake
let produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 80 }
];

// Configuração Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Produtos",
      version: "1.0.0",
      description: "CRUD simples usando Express e Swagger"
    }
  },
  apis: ["./server.js"]
};

const swaggerSpec = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 */
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria um novo produto
 */
app.post("/produtos", (req, res) => {
  const { nome, preco } = req.body;

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco
  };

  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto
 */
app.put("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, preco } = req.body;

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  produto.nome = nome;
  produto.preco = preco;

  res.json(produto);
});

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Remove um produto
 */
app.delete("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  produtos = produtos.filter(p => p.id !== id);

  res.json({ mensagem: "Produto removido" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
  console.log("Swagger em: http://localhost:3000/docs");
});