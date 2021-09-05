import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]');

//addEventListener escuta eventos que no caso deste e o evento de submit do botao 
//do formulario, parametro da funcao anonima (evento), serve para buscar exatamente onde esta
//ocorrendo o evento, ao inves de busca no documento inteiro, value pegar o conteudo do input
formulario.addEventListener('submit', async function (evento) {
    //previne o comportamento padrao do botao de submit de um form
    evento.preventDefault();

   try {
        const nome = evento.target.querySelector('[data-nome]').value;
        const email = evento.target.querySelector('[data-email]').value;
        
        await clienteService.criaCliente(nome,email)
        window.location.href = '../telas/cadastro_concluido.html';
       
   } catch (erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html';
   }
})