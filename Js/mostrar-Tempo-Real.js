let verNome = document.querySelector('#nome_profissional')
let mostrarNome = document.querySelector('#nome-profissional')

verNome.addEventListener('keyup', () => {
  mostrarNome.innerHTML = verNome.value
})

let verCPF = document.querySelector('#cpf_profissional')
let mostrarCPF = document.querySelector('#cpf-profissional')

verCPF.addEventListener('keyup', () => {
  mostrarCPF.innerHTML = verCPF.value
})

let verCRO = document.querySelector('#cro_profissional')
let mostrarCRO = document.querySelector('#cro-profissional')

verCRO.addEventListener('keyup', () => {
  mostrarCRO.innerHTML = verCRO.value
})

let Bairro = document.querySelector('#bairro')
let Logradouro = document.querySelector('#logradouro')
let Numero = document.querySelector('#numero')
let Complemento = document.querySelector('#complemento')
let Cidade = document.querySelector('#cidade')
let endereco_p = document.querySelector('.div-enderecoP')
let mostrarEndereco = document.querySelector('#endereco-profissional')
endereco_p.addEventListener('keyup', () => {
  mostrarEndereco.innerHTML =
    Bairro.value +
    ', ' +
    Logradouro.value +
    ', ' +
    Numero.value +
    ',' +
    Complemento.value +
    ',' +
    Cidade.value
})
