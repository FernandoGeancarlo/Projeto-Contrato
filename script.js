function GerarContrato() {
    let nomeProfissional = document.getElementById("nome_profissional").value;
    let campoProfissional = document.getElementById("nome-profissional");
    
    campoProfissional.innerHTML =(nomeProfissional);

    let cpfProfissional = document.getElementById("cpf_profissional").value;
    let campoCPF = document.getElementById("cpf-profissional");

    campoCPF.innerHTML   = (cpfProfissional);

    let CRO = document.getElementById("cro_profissional").value;
    let campoCRO = document.getElementById("cro-profissional");

    campoCRO.innerHTML   = (CRO);

    let Bairro = document.getElementById("bairro").value;
    let Logradouro = document.getElementById("logradouro").value;
    let Numero = document.getElementById("numero").value;
    let Complemento = document.getElementById("complemento").value;

    let CampoEndereco = document.getElementById("endereco-profissional");

    CampoEndereco.innerHTML  = (Bairro + ", " + Logradouro + ", " + Numero + ", " + Complemento);

    let formulario = document.getElementById("conteiner");
    formulario.style.display="none";
    window.print();
  }

