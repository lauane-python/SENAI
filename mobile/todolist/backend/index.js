require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const conexao = require("./db");
const app = express();
app.use(cors());
app.use(express.json());
const porta = 3001;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
app.post("/cadastrar", async (req, res) => {
    const { email, senha } = req.body;
    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        await conexao.execute(
            "INSERT INTO usuarios(email, senha) VALUES (?, ?)",
            [email, senhaCriptografada]
        );
        res.json({
            resposta: "true",
            mensagem: "Cadastro realizado com sucesso"
        });
    } catch (error) {
        console.log(error);
        res.json({
            resposta: "false",
            mensagem: "Erro ao cadastrar"
        });
    }
});
app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    try {
        const [usuarios] = await conexao.execute(
            "SELECT * FROM usuarios WHERE email = ?",
            [email]
        );
        if (usuarios.length === 0) {
            return res.json({
                resposta: "false",
                mensagem: "Usuário não encontrado"
            });
        }
        const usuario = usuarios[0];
        const senhaValida = await bcrypt.compare(
            senha,
            usuario.senha
        );
        if (!senhaValida) {
            return res.json({
                resposta: "false",
                mensagem: "Senha inválida"
            });
        }
        const token = jwt.sign(
            { id: usuario.id },
            process.env.API_SEGREDO,
            { expiresIn: "1h" }
        );
        res.json({
            resposta: "true",
            mensagem: "Login realizado",
            token
        });
    } catch (error) {
        console.log(error);
        res.json({
            resposta: "false",
            mensagem: "Erro no login"
        });
    }
});