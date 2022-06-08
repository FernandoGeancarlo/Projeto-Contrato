//select das especialidades
var selecionar = document.querySelector("#especialidade");

//vai alterar o texto da clausula 9 de acordo com a especialidade
var alterar = document.querySelector("#desaparecer");

//alterar titulo do contrato
var tituloC = document.querySelector(".titulo-contrato");

let C9 = document.querySelector("#c9");

selecionar.addEventListener('change', setText);

function setText() {
    texto = selecionar.value;

    if(texto === 'protese') {
        C9.innerHTML=''
        tituloC.textContent = 'CONTRATO DE PRESTAÇÃO DE SERVIÇO AUTÔNOMO DE PROTÉTICO';
        C9.innerHTML = '<p><strong>CLÁUSULA 09 – DOS VALORES</strong> Os pagamentos relativos aos procedimentos serão realizados de acordo com a porcentagem estabelecidas em comum acordo das partes até 5%.                                                                               <p><strong>PARÁGRAFO PRIMEIRO</strong> O fechamento ocorrerá sempre no final do expediente.</p>';
    
    } else if(texto === 'orto'){
        C9.innerHTML=''
        tituloC.textContent = 'CONTRATO DE PRESTAÇÃO DE SERVIÇO AUTÔNOMO DE ORTODONTISTA';
        C9.innerHTML = '<p><strong>CLÁUSULA 09 – DOS VALORES DOS PROCEDIMENTOS</strong> Caberá ao(à) CONTRATADO(A) definir os valores relativos a cada procedimento odontológico.</p>       <p><strong>PARÁGRAFO PRIMEIRO</strong> Os pagamentos relativos aos procedimentos serão realizados pelos clientes diretamente ao CONTRATANTE que, após a retirada de seu percentual, passará o remanescente ao(à) CONTRATADO(A).</p>';
        
    } else if(texto === 'implante'){
        tituloC.textContent = 'CONTRATO DE PRESTAÇÃO DE SERVIÇO AUTÔNOMO DE IMPLANTODONTISTA';
        C9.innerHTML = "<p><strong>CLÁUSULA 09 – DOS VALORES DOS PROCEDIMENTOS</strong> Caberá ao(à) CONTRATADO(A) definir os valores relativos a cada procedimento odontológico.</p>  <p><strong>PARÁGRAFO PRIMEIRO</strong> Os pagamentos relativos aos procedimentos serão realizados pelos clientes diretamente à CONTRATADA que, após a retirada de seu percentual, passará o remanescente à CONTRATANTE, sendo o pago 50% do valor total, e o mesmo deverá ser pago dividido por fase (fase cirúrgica e fase protética).</p>                                      <p><strong>PARÁGRAFO SEGUNDO</strong> Os pagamentos relativos aos procedimentos serão realizados pelos clientes diretamente ao CONTRATANTE que, após a retirada de seu percentual, passará o remanescente ao(à) CONTRATADO(A).</p>";

    } else if(texto === 'clinico'){
        C9.innerHTML='';
        tituloC.textContent = 'CONTRATO DE PRESTAÇÃO DE SERVIÇO AUTÔNOMO DE CIRURGIÃO DENTISTA';
        C9.innerHTML = '<p><strong>CLÁUSULA 09 – DOS VALORES DOS PROCEDIMENTOS</strong> Caberá ao(à) CONTRATADO(A) definir os valores relativos a cada procedimento odontológico.</p> <p><strong>PARÁGRAFO PRIMEIRO</strong> Os pagamentos relativos aos procedimentos serão realizados pelos clientes diretamente ao CONTRATANTE que, após a retirada de seu percentual, passará o remanescente ao(à) CONTRATADO(A).</p>'
    }
}