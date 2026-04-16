const api = "http://localhost:3000/produtos"

function carregarProdutos(){

fetch(api)
.then(res => res.json())
.then(produtos => {

const lista = document.getElementById("listaProdutos")

lista.innerHTML = ""

produtos.forEach(produto => {

lista.innerHTML += `
<tr>
<td>${produto.id}</td>
<td>${produto.nome}</td>
<td>${produto.preco}</td>
<td>
<button onclick="editarProduto(${produto.id})">Editar</button>
<button onclick="deletarProduto(${produto.id})">Excluir</button>
</td>
</tr>
`

})

})

}

function adicionarProduto(){

const nome = document.getElementById("nome").value
const preco = document.getElementById("preco").value

fetch(api,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({nome, preco})
})
.then(()=>carregarProdutos())

}

function deletarProduto(id){

fetch(`${api}/${id}`,{
method:"DELETE"
})
.then(()=>carregarProdutos())

}

function editarProduto(id){

const nome = prompt("Novo nome")
const preco = prompt("Novo preço")

fetch(`${api}/${id}`,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({nome, preco})
})
.then(()=>carregarProdutos())

}

carregarProdutos()