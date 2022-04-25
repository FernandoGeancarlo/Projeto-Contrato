var selecionar = document.querySelector("#especialidade");
var alterar = document.querySelector("#desaparecer");

selecionar.addEventListener('change', setText);

function setText() {
    texto = selecionar.value;

    if(texto === 'protese') {
        alterar.textContent ='CLÁUSULA 09 – DOS VALORES Os pagamentos relativos aos procedimentos serão realizados de acordo com a porcentagem estabelecidas em comum acordo das partes até 5%. PARÁGRAFO SEGUNDO O fechamento ocorrerá sempre no final do expediente.'
    }
}