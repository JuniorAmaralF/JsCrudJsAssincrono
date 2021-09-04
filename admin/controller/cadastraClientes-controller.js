import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]');

//addEventListener escuta eventos que no caso deste e o evento de submit do botao 
//do formulario, parametro da funcao anonima (evento), serve para buscar exatamente onde esta
//ocorrendo o evento, ao inves de busca no documento inteiro, value pegar o conteudo do input
formulario.addEventListener('submit', function (evento) {
    //previne o comportamento padrao do botao de submit de um form
    evento.preventDefault();

   const nome = evento.target.querySelector('[data-nome]').value;
   const email = evento.target.querySelector('[data-email]').value;

    clienteService.criaCliente(nome,email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html'
    })
})