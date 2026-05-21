const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const conexao = require('./db')
const app = express()
app.use(cors())
app.use(express.json())
const porta = 3000

const api_chave = process.env.API_SEGREDO

app.listen(porta, () => {
    console.log("Rodando")
})

app.post("/cadastro", async (req, res) => {
    const { email, senha } = req.body

    if (email.length <= 3) {
        return res.json({ "mensagem": "Preencha o e-mail !" })
    }
    if (senha.length <= 6) {
        return res.json({ "mensagem": "Preencha uma senha com no mínimo 7 caracteres!" })
    }

    try {
        const novaSenha = await bcrypt.hash(senha, 10)
        const [resultado] = await conexao.execute("INSERT INTO usuarios (email, senha) values (?, ?)", [email, novaSenha])
        res.json({ "mensagem": "༼ つ ◕_◕ ༽つ","resposta":"true" })
    } catch (error) {
        
        console.log(`O erro que houve foi ${error}`)
        res.json({ "mensagem": "Erro","resposta":"false" })
    }
})

app.post("/login", async (req, res) => {
    const { email, senha } = req.body
    try {
        const [resultado] = await conexao.execute(`SELECT email FROM usuarios WHERE email = ?`, [email])
        if (resultado.length > 0) {
            const [resultado2] = await conexao.execute(`SELECT * FROM usuarios WHERE email = ? `, [email])
            const validou = await bcrypt.compare(senha, resultado2[0].senha)
            if (validou == false) {
                return res.status(401).json({ "mensagem": "Usuário ou senha inválido!" })
            }
            const token = jwt.sign({
                email: email,                    
            },api_chave,{
                expiresIn: "1h"
            })
            res.json({ "mensagem": "Acesso Liberado", "token": token })
        } else {
            return res.json({ "mensagem": "Nenhum e-mail encontrado!" })
        }
    } catch (error) {
        console.log(error)
        return res.json({ "mensagem": "Erro ao fazer login !" })
    }
})

function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }
  const token = authHeader.split(" ")[1]; // Bearer TOKEN
  jwt.verify(token, api_chave, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido" });
    }
    req.user = user; // dados do token
    next();
  });
}

app.post("/perfil", autenticarToken,(req,res)=>{
    res.send(req.user)
})

app.post("/perfil2", autenticarToken,(req,res)=>{
    res.send(req.user)
})