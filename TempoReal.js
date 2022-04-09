
function mascaraCPF() {
    let cpf = document.getElementById("cpf_profissional").value;
    if (cpf.value.lenght == 3 || cpf.value.lenght == 7 ){
        cpf.value += ".";
    }
}

let verNome = document.querySelector("#nome_profissional");
let mostrarNome = document.querySelector("#nome-profissional");

verNome.addEventListener('keyup', () => {
    mostrarNome.innerHTML = verNome.value;});

let verCPF = document.querySelector("#cpf_profissional");
let mostrarCPF = document.querySelector("#cpf-profissional");

verCPF.addEventListener('keyup', () => {
    mostrarCPF.innerHTML = verCPF.value;});


let verCRO = document.querySelector("#cro_profissional");
 let mostrarCRO = document.querySelector("#cro-profissional");
    
verCRO.addEventListener('keyup', () => {
mostrarCRO.innerHTML = verCRO.value;});

