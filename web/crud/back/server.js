const express = require('express')
const cors = require('cors')
const mysql = require("mysql2/promise")
//Importar o Módulo de conexão com BD
const conexao = require('./db.js')
const porta = 3000
const server = express()

//Trazendo o swagger para o codigo
const swaggerui = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

//Módulo Crypto --> serve para gerar hashs

//Chamando e configurando o swagger
server.use('/api-docs',swaggerui.serve,swaggerui.setup(swaggerDocument));
server.use(cors())
//consegue acessar os dados do body
server.use(express.json())

server.listen (porta, () => {
    console.log("Servidor está rodando !")
})

server.post("/inserir", async (req,res) => {
    try {
        const{nome, preco} = req.body
        //validar as informações(todos - o caminho_foto, pois esta null )
        const sql = `INSERT INTO produtos (nome, preco) VALUES (?,?)`

        const [resultado] = await conexao.query(sql,[nome, preco])

        res.send(resultado)

    } catch (error) {
        console.log(error)
    }
})

server.get("/buscar", async (req,res) => {
    const{nome} = req.body
    try {
        const [resultado] = await conexao.query(`SELECT * FROM produtos WHERE nome LIKE '%${nome}%'`)
        res.send(resultado)
    } catch (error) {
        console.log(error)
    }
})

server.put("/atualizar", async (req,res) => {
    try {
        const{id, nome, preco} = req.body
        const[resultado] = await conexao.query(`UPDATE produtos SET nome = '${nome}', preco = '${preco}' WHERE id = ${id}`)
        res.send(resultado)
    } catch (error) {
        console.log(error)
    }
})

server.delete("/deletar", async (req,res) => {
    try {
        const{id} = req.body
        const [resultado] = await conexao.query (`DELETE FROM produtos WHERE id = ${id}`)
        res.send(resultado)
    } catch (error) {
        console.log(error)
    }
})


