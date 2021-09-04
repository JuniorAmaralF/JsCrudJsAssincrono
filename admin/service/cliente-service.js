// ()=> arrow function
const listaClientes = function (){
    return fetch(`http://localhost:3000/profile`)
    .then (resposta => {
        return resposta.json()
    })
}

//metodo JSON.parse pega o texto e transforma em um javascript valido
//metodo JSON.stringify converte valores em javascript para uma String  JSON

const criaCliente = function(nome,email) {
    return fetch('http://localhost:3000/profile',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email:email
        })
    })
    .then(resposta => {
        return resposta.body
    })
}
//recebe parametro id, que ira buscar no db.json na hora da exclusa
//comandos pela url , usar ``, aspas simples nao funciona
//Deletar um cliente utilizando o verbo http DELETE
const removeCliente = function (id){
    return fetch(`http://localhost:3000/profile/${id}`,{
        method:'DELETE'
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente
}