function GerarContrato() {

    // Pega o dado informado no campo ''Nome do profissional''
    let nomeProfissional = document.getElementById("nome_profissional").value;
    // Refereciando o campo Nome do profissional para ser preenchido na 1° página do contrato
    let campoProfissional = document.getElementById("nome-profissional");

    //Pega o dado infomado no campo ''CPF do Profissional''
    let cpfProfissional = document.getElementById("cpf_profissional").value;  
    //Referencia o campo CPF profissional para ser preenchido na 1° págian do contrato
    let campoCPF = document.getElementById("cpf-profissional");

    //Pega o dado informado no CRO do profissional
    let CRO = document.getElementById("cro_profissional").value;
    //Referencia o campo do CRO profissional na 1°página do contrato
    let campoCRO = document.getElementById("cro-profissional");

    //Pega os dados de Bairro, Logradouro, N°APT e Complemento informados
    let Bairro = document.getElementById("bairro").value;
    let Logradouro = document.getElementById("logradouro").value;
    let Numero = document.getElementById("numero").value;
    let Complemento = document.getElementById("complemento").value;

    //Referencia o campo endereço na 1° página do contrato
    let CampoEndereco = document.getElementById("endereco-profissional");

    
    campoProfissional.innerHTML =(nomeProfissional); //Insere o que foi pego dentro do HTML
    campoCPF.innerHTML   = (cpfProfissional); 
    campoCRO.innerHTML   = (CRO); 
    CampoEndereco.innerHTML  = (Bairro + ", " + Logradouro + ", " + Numero + ", " + Complemento);

    let formulario = document.getElementById("conteiner");
    formulario.style.display="none";
    window.print();
  }

