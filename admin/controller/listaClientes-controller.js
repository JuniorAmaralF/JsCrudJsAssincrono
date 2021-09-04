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
tabela.addEventListener('click', function (evento) {
    //colocar com tres igual , sem isso pode ocorrer erro de selecao
   let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
   if (ehBotaoDeletar){
       const linhaCliente = evento.target.closest('[data-id]');
       let id = linhaCliente.dataset.id;
       clienteService.removeCliente(id)
       .then(function(){
           //Remover um elemento do dom com método remove()
           linhaCliente.remove()
       })
   }

})

clienteService.listaClientes()
.then(data => {
    data.forEach(elemento =>{
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
})})