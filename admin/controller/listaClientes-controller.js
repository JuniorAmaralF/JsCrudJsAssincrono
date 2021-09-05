import { clienteService } from "../service/cliente-service.js";
const criaNovaLinha = function(nome,email,id){
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" id="excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
                 `   
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id;

    return linhaNovoCliente;
}
const tabela = document.querySelector('[data-tabela]');

//método closest para encontrar o elemento do DOM mais próximo ao que queremos remover
//async indica que e uma funcao assicrona, que pode conter uma expressão await,
// que pausa a execução da função assíncrona e espera pela resolução da promise. Depois retorna a 
//função assíncrona e retorna o valor resolvido. Ele substitui o .then.
tabela.addEventListener('click', async function (evento) {
    //colocar com tres igual , sem isso pode ocorrer erro de selecao
   let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
   if (ehBotaoDeletar){
       try {
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id;
        await clienteService.removeCliente(id);
      //Remover um elemento do dom com método remove()
        linhaCliente.remove();  
       } catch (erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
       }
        
   }
})

const render = async function (){
    try {
        const listaClientes = await clienteService.listaClientes()
        listaClientes.forEach(elemento =>{
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
    })
    } catch (erro) {
        console.log(erro);
        window.location.href = '../telas/erro.html';
    }
   
}

render();