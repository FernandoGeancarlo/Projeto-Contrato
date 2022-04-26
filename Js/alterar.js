//select das especialidades
var selecionar = document.querySelector("#especialidade");

//vai alterar o texto da clausula 9 de acordo com a especialidade
var alterar = document.querySelector("#desaparecer");

//Para remover o parágrafo da clausula 9 que envolve clinico
var pClinico = document.querySelector("#paragrafo-clinico");

//texto fereferente ao paragrafo segundo a ser adicionado ao selecionar protetico
var addTexto = document.querySelector("#adicionar-protetico");

//alterar titulo do contrato
var tituloC = document.querySelector(".titulo-contrato");

//para exclusão do paragrafo segundo referente a protetico
var excluirP = document.querySelector("#protetico-P2");

//alterar o paragrafo primeiro - clausula 9 para implante
var pFixo = document.querySelector("#p-fixo");

selecionar.addEventListener('change', setText);

function setText() {
    texto = selecionar.value;

    if(texto === 'protese') {
        tituloC.textContent = 'CONTRATO DE PRESTAÇÃO DE SERVIÇO AUTÔNOMO DE PROTÉTICO';
        alterar.textContent = 'Os pagamentos relativos aos procedimentos serão realizados de acordo com a porcentagem estabelecidas em comum acordo das partes até 5%.';
        addTexto.textContent = ' O fechamento ocorrerá sempre no final do expediente.';
        pClinico.textContent = '';

    } else if(texto === 'orto'){
        tituloC.textContent = 'CONTRATO DE PRESTAÇÃO DE SERVIÇO AUTÔNOMO DE ORTODONTISTA';
        excluirP.textContent = '';

    } else if(texto === 'implante'){
        tituloC.textContent = 'CONTRATO DE PRESTAÇÃO DE SERVIÇO AUTÔNOMO DE IMPLANTODONTISTA';
        excluirP.textContent = 'PARÁGRAFO PRIMEIRO';
        addTexto.textContent = ' Os pagamentos relativos aos procedimentos serão realizados pelos clientes diretamente à CONTRATADA que, após a retirada de seu percentual, passará o remanescente à CONTRATANTE, sendo o pago 50% do valor total, e o mesmo deverá ser pago dividido por fase (fase cirúrgica e fase protética).' 
        pFixo.textContent = 'PARÁGRAFO SEGUNDO'; 

    } else if(texto === 'clinico'){
        tituloC.textContent = 'CONTRATO DE PRESTAÇÃO DE SERVIÇO AUTÔNOMO DE CIRURGIÃO DENTISTA';
        excluirP.textContent = '';
    }
}