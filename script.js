let clinica = [
  {"nome": "ANIL",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL ANIL LTDA",
  "cnpjClinica": "32.318.493/0001-07",
  "enderecoClinica": "AV CASEMIRO JUNIOR, Nº 33 - ANIL, CEP: 65.045-180, SÃO LUIS - MA"},
  
  {"nome": "CAXIAS",
  "razaoSocial": "DENTISTAS DO BRASIL CAXIAS LTDA ",
  "cnpjClinica":"32.345.264/0001-73" ,
  "enderecoClinica":"PC GONÇALVES DIAS, Nº 191 - CENTRO - CEP: 65604-010, CAXIAS - MA" },
  
  {"nome": "RUA GRANDE" ,
  "razaoSocial":"MEU DENTISTA CONSULTORIO ODONTOLOGICO LTDA" ,
  "cnpjClinica": "26.611.261/0001-31" ,
  "enderecoClinica":"R OSWALDO CRUZ, 76, SALA 102 - CENTRO - CEP: 65020-250, SÃO LUIS - MA" },
  
  {"nome": "COHAB",
  "razaoSocial":"CLINICA ODONTOLOGICA R T DANTAS LTDA" ,
  "cnpjClinica":"26.584.031/0001-20" ,
  "enderecoClinica":"AV JERONIMO DE ALBUQUERQUE, Nº 5 - COHAB ANIL III - CEP: 65.050-175, SÃO LUIS - MA" },

  {"nome": "DEODORO",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL DEODORO LTDA" ,
  "cnpjClinica": "35.973.612/0001-45" ,
  "enderecoClinica":"RUA DA PAZ, Nº 62 - CENTRO - CEP: 65.020-450, SÃO LUIS - MA" },

  {"nome": "IMPERATRIZ" ,
  "razaoSocial":"CLINICA ODONTOLOGICA DENTISTAS DO BRASIL IMPERATRIZ LTDA" ,
  "cnpjClinica":"35.686.404/0001-65" ,
  "enderecoClinica":"AV GETULIO VARGAS, Nº 1875 - CENTRO - CEP: 65903-280, IMPERATRIZ - MA" },

  {"nome":"JOÃO PAULO C1" ,
  "razaoSocial": "DENTISTAS REUNIDOS EIRELI",
  "cnpjClinica":"26.536.625/0001-66" ,
  "enderecoClinica":"AV JOÃO PESSOA, n° 352, LOJA 11 - JOÃO PAULO - CEP: 65040-000, SÃO LUIS - MA" },

  {"nome":"JOÃO PAULO C2" ,
  "razaoSocial":"DENTISTAS REUNIDOS EIRELI" ,
  "cnpjClinica":"26.536.625/0002-47" ,
  "enderecoClinica":"AV JOÃO PESSOA, Nº 340 - JORDOA - CEP: 65.041-645, SÃO LUIS - MA" },

  {"nome":"JOÃO PAULO C3" ,
  "razaoSocial":"CLINICA ODONTOLOGICA DENTISTAS DO BRASIL JOAO PAULO LTDA" ,
  "cnpjClinica":"35.631.468/0001-69",
  "enderecoClinica":"AV GETULIO VARGAS, Nº 210 A - JOAO PAULO - CEP: 65.040-020, SÃO LUIS - MA" },

  {"nome":"JARDIM AMERICA",
  "razaoSocial":"RODRIGUES E GONCALVES LTDA" ,
  "cnpjClinica": "37.603.991/0001-07",
  "enderecoClinica":"AV.01, N°121 - JARDIM AMÉRICA - CEP: 65058-284, SÃO LUIS - MA" },

  {"nome": "SÃO BERNARDO" ,
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL SAO BERNARDO LTDA" ,
  "cnpjClinica":"26.547.680/0001-51" ,
  "enderecoClinica":"R DO NORTE, N°34, SÃO BERNARDO - CEP: 65.055-800	SÃO LUIS - MA" },

  {"nome": "SÃO CRISTOVÃO",
  "razaoSocial": "A APARECIDA DA SILVA",
  "cnpjClinica":"16.422.138/0001-19" ,
  "enderecoClinica": "AV GUAJAJARAS, N°480, SALA 107 - JARDIM SÃO CRISTOVÃO - CEP: 65.055-285, SÃO LUIS - MA"},

  {"nome": "TIMON",
  "razaoSocial": "CLINICA ODONTOLOGICA MEU DENTISTA LTDA",
  "cnpjClinica":"27.416.210/0001-11" ,
  "enderecoClinica": "AV FRANCISCO CARLOS JANSEN, Nº 1050 - PARQUE PIAUÍ - CEP: 65631-240, TIMON - MA"},

  {"nome": "PRESIDENTE DUTRA",
  "razaoSocial": "TRANDAFILOV E MATOS LTDA",
  "cnpjClinica": "38.197.807/0001-39",
  "enderecoClinica": "TV ANTONIO MACEDO, N°65 - CENTRO - CEP: 65760-000, PRESIDENTE DUTRA - MA"},

  {"nome": "SANTA INES",
  "razaoSocial": "FERNANDES E MENDES LTDA",
  "cnpjClinica": "38.596.726/0001-01",
  "enderecoClinica": "RUA DO COMERCIO, N°597 - CENTRO - CEP: 65300-046, SANTA INÊS - MA"},

  {"nome": "PARNAIBA",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL PARNAIBA LTDA",
  "cnpjClinica":"27.282.473/0001-85" ,
  "enderecoClinica": "R PEDRO II, N°970 - CENTRO - CEP: 64.200-420, PARNAIBA - PI"},

  {"nome": "PIRIPIRI",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL PIRIPIRI LTDA",
  "cnpjClinica": "33.640.878/0001-40",
  "enderecoClinica": "AV 4 DE JULHO, N°162, SALA 1 - CENTRO - CEP: 64.260-000, PIRIPIRI - PI"},

  {"nome": "TERESINA C1",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS UNIDOS LTDA",
  "cnpjClinica":"26.550.289/0002-97" ,
  "enderecoClinica": "R TREZE DE MAIO, N°162, SALA 101 - CENTRO - CEP: 64.000-150, TERESINA - PI"},

  {"nome": "TERESINA C2",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS UNIDOS LTDA",
  "cnpjClinica": "26.550.289/0001-06",
  "enderecoClinica": "RUA ELIZEU MARTINS, N°1224, CENTRO - CEP: 64.000-120, TERESINA - PI"},

  {"nome": "TERESINA C3",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL TERESINA LTDA",
  "cnpjClinica":"26.695.441/0001-49" ,
  "enderecoClinica": "Q 36 (CJ DIRCEU ARCOVERDE I), N°13, CASA 13, ITARARE  - CEP: 64.077-104, TERESINA - PI"},

  {"nome": "TERESINA C4",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL TERESINA LTDA",
  "cnpjClinica": "26.695.441/0002-20",
  "enderecoClinica": "AV JOSE FRANCISCO DE ALMEIDA NETO, SN, QD 172, CASA 10 SALA A, BAIRRO: ITARARE - CEP: 64.077-175, TERESINA - PI"},

  {"nome": "TERESINA C5",
  "razaoSocial": "M L MIYASAKI EIRELI",
  "cnpjClinica": "37.782.392/0001-06",
  "enderecoClinica": "RUA ELIZEU MARTINS, N°1257, TERREO 1, CENTRO - CEP: 64.000-120, TERESINA - PI"},

  {"nome": "TERESINA C6",
  "razaoSocial": "APARECIDA & GONCALVES LTDA",
  "cnpjClinica": "39.622.827/0001-72",
  "enderecoClinica": "AV. MARECHAL JUAREZ TAVORA, N°11, QD 64, CASA 11 - PARQUE PIAUÍ - CEP: 64.025-520, TERESINA - PI"},

  {"nome": "CAJAZEIRAS",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL CAJAZEIRAS LTDA",
  "cnpjClinica": "32.041.264/0001-80",
  "enderecoClinica": "R CEL JUVENCIO CARNEIRO, Nº 276, TERREO - CENTRO - CEP: 58.900-000, CAZAJEIRAS - PB"},

  {"nome": "SOUSA",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL SOUSA LTDA",
  "cnpjClinica": "32.171.038/0001-13",
  "enderecoClinica": "R PRESIDENTE JOAO PESSOA, 21 A, TERREO - CENTRO - CEP: 58.800-010, SOUSA - PB"},

  {"nome": "CEILANDIA",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL CEILANDIA LTDA",
  "cnpjClinica": "32.385.404/0001-37",
  "enderecoClinica": "Q QNM 1, CONJUNTO H, N°44, LOJA 01 - CEILÂNDIA SUL - CEP: 72.215-018, BRASILIA - DF"},

  {"nome": "SAMAMBAIA",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL SAMAMBAIA LTDA",
  "cnpjClinica": "32.385.377/0001-00",
  "enderecoClinica": "Q QN 206, CONJUNTO A LOTE, Nº 02, LOJA 4 - SAMAMBAIA NORTE - CEP: 72.316-501, BRASILIA - DF"},

  {"nome": "RORAIMA C1",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL BOA VISTA LTDA",
  "cnpjClinica": "33.263.466/0001-39",
  "enderecoClinica": "AV GENERAL ATAIDE TEIVE, Nº 5277 - ASA BRANCA - CEP: 69.312-244, BOA VISTA - RR"},

  {"nome": "RORAIMA C2",
  "razaoSocial": "DENTISTAS DO BRASIL SERVICOS ODONTOLOGICOS LTDA",
  "cnpjClinica": "29.652.506/0001-67",
  "enderecoClinica": "AV GETULIO VARGAS, Nº 5919 - CENTRO - CEP: 69301-030, BOA VISTA - RR"},

  {"nome": "RORAIMA C3",
  "razaoSocial": "CLINICA ODONTOLOGICA BOA VISTA LTDA",
  "cnpjClinica": "40.522.736/0001-44",
  "enderecoClinica": "AVENIDA SEBASTIÃO DINIZ, 1002 - CENTRO - CEP: 69.301-040, BOA VISTA - RR"},

  {"nome": "RECIFE C1",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL RECIFE LTDA",
  "cnpjClinica": "36.209.455/0001-69",
  "enderecoClinica": "AV CONDE DA BOA VISTA, Nº 121, EDF TABIRA LOJA - BOA VISTA - CEP: 50.060-002, RECIFE - PE"},

  {"nome": "RECIFE C2",
  "razaoSocial": "MARQUES E MARTINS LTDA",
  "cnpjClinica": "38.009.815/0001-04",
  "enderecoClinica": "R NOVA, N°286 - SANTO ANTONIO - CEP: 50.010-100, RECIFE - PE"},

  {"nome": "RECIFE C3",
  "razaoSocial": "RTD E MARQUES LTDA",
  "cnpjClinica": "44.697.861/0001-46",
  "enderecoClinica": "RUA IMPERATRIZ TEREZA CRISTINA, Nº 94 - BOA VISTA - CEP: 50060-120, RECIFE - PE"},

  {"nome": "JUIZ DE FORA",
  "razaoSocial": "TRANDAFILOV E ARAUJO LTDA",
  "cnpjClinica": "37.252.775/0001-64",
  "enderecoClinica": "RUA HALFELD, N 397, PAVIMENTO 2 - CENTRO  - CEP: 36010-000, JUIZ DE FORA - MG"},

  {"nome": "BELO HORIZONTE",
  "razaoSocial": "TRANDAFILOV E OLIVEIRA LTDA",
  "cnpjClinica": "37.291.965/0001-90",
  "enderecoClinica": "RUA DOS GUARANIS, Nº 436 - CENTRO - CEP: 30120-040, BELO HORIZONTE - MG"},

  {"nome": "BELEM C1",
  "razaoSocial": "SALES E MARQUES LTDA",
  "cnpjClinica": "41.556.725/0001-48",
  "enderecoClinica": "PRAÇA MARANHÃO, Nº 599, CAMPINA - CEP: 66019-010, BELÉM - PA"},

  {"nome": "BELEM C2",
  "razaoSocial": "SALES, MARQUES E DANTAS LTDA",
  "cnpjClinica": "43.860.820/0001-66",
  "enderecoClinica": "RUA CONSELHEIRO JOÃO ALFREDO, Nº 297 - CAMPINA - CEP: 66.013-000, BELÉM - PA"},

  {"nome": "GUAMA",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTA DO BRASIL BELEM LTDA",
  "cnpjClinica": "34.084.721/0001-49",
  "enderecoClinica": "R BARAO DE IGARAPE MIRI, Nº 333 - GUAMÁ - CEP: 66.075-000, BELEM - PA"},
  
  {"nome": "MACAPA",
  "razaoSocial": "CLINICA ODONTOLOGICA DENTISTAS DO BRASIL MACAPA LTDA",
  "cnpjClinica": "33.859.741/0001-81",
  "enderecoClinica": "AV TREZE DE SETEMBRO, Nº 1913, LETRA C - BURITIZAL - CEP: 68902-865, MACAPÁ - AP"},
  
  {"nome": "CEARA MIRIM",
  "razaoSocial": "W ANTUNES DE OLIVEIRA",
  "cnpjClinica": "38.117.937/0001-14",
  "enderecoClinica": "PC ONOFRE JOSE SOARES, N°223 - CENTRO - CEP: 59570-000, CEARÁ-MIRIM - RN"},
  
  {"nome": "MACEIO CENTRO",
  "razaoSocial": "N APARECIDA FERREIRA LTDA",
  "cnpjClinica": "42.165.361/0001-38",
  "enderecoClinica": "RUA CINCINATO PINTO, Nº 129 - CENTRO - CEP: 57020-050, MACEIÓ - AL"},
  
  {"nome": "MACEIO BENEDITO",
  "razaoSocial": "C DE FARIA MARQUES LTDA",
  "cnpjClinica": "42.150.100/0001-44",
  "enderecoClinica": "AV. BENEDITO BENTES, QUADRA C12, Nº 1094A - BENEDITO BENTES - CEP: 57084-800, MACEIÓ - AL"},
  
  {"nome": "PARAISO C1",
  "razaoSocial": "CDTO-CENTRO DE DIAGNOSTICO E TRATAMENTO ODONTOLOGICO LTDA",
  "cnpjClinica": "36.697.419/0001-91",
  "enderecoClinica": "AV BERNARDO SAYAO, N°1440, QD.03 LOTE 14 SALA 02, INTERLAGOS, CEP:77.600-000, PARAISO DO TOCANTINS- TO"},
  
  {"nome": "PARAISO C2",
  "razaoSocial": "PAIVA ODONTOLOGIA LTDA",
  "cnpjClinica": "41.500.139/0001-81",
  "enderecoClinica": "AV. BERNARDO SAYÃO, Nº 1090, QD 06, LT 16 - CENTRO - CEP: 77600-000, PARAÍSO DO TOCANTINS - TO"},
  
  {"nome": "ESTREITO",
  "razaoSocial": "ARRUDA E AGUIAR LTDA",
  "cnpjClinica": "41.640.266/0001-86",
  "enderecoClinica": "AV.TANCREDO NEVES, Nº 451, SL 0451 - CENTRO - CEP: 65975-000, ESTREITO - MA"},

  {"nome": "PORTO NACIONAL",
  "razaoSocial": "THAYS RANGEL BATISTA DE ALBUQUERQUE LTDA",
  "cnpjClinica": "41.737.041/0001-42",
  "enderecoClinica": "PRAÇA DO CENTENÁRIO, Nº 642 - CENTRO - CEP: 77500-000, PORTO NACIONAL - TO"},
  
  {"nome": "ARAGUAINA",
  "razaoSocial": "T R BATISTA DE ALBUQUERQUE LTDA",
  "cnpjClinica": "41.791.172/0001-08",
  "enderecoClinica": "AV. CONÊGO JOÃO LIMA, Nº 2061, QD.: 13, PARTE DO LT. 02A, CENTRO - CEP: 77804-010, ARAGUAÍNA-TO"},
  
  {"nome": "VARZEA GRANDE",
  "razaoSocial": "J G NAGLIATI E O M JUNIOR LTDA",
  "cnpjClinica": "42.202.371/0001-04",
  "enderecoClinica": "AV. COUTO MAGALHÃES (LOT CENTRO), Nº 2320 - CENTRO NORTE - CEP: 78110-400, VÁRZEA GRANDE/MT"},
  
  {"nome": "SANTANA",
  "razaoSocial": "LOPES E BRAGA LTDA",
  "cnpjClinica": "42.274.693/0001-50",
  "enderecoClinica": "AV. SANTANA, Nº 512 - BAIRRO COMERCIAL - CEP: 68925-076, SANTANA - AP"},
  
  {"nome": "JOÃO CAMARA",
  "razaoSocial": "ANTUNES E DANTAS LTDA",
  "cnpjClinica": "42.443.296/0001-65",
  "enderecoClinica": "RUA PADRE JOÃO MARIA, S/N - CENTRO - CEP: 59550-000, JOÃO CÂMARA - RN"},
  
  {"nome": "CAMPOS SALES",
  "razaoSocial": "TRANDAFILOV E GOMES LTDA",
  "cnpjClinica": "42.862.223/0001-08",
  "enderecoClinica": "RUA DONA OTÍLIA, N°400, LT. 4, QUADRA 1A RS. RIO SOLIMÕES - TARUMÃ - CEP: 69021-005, MANAUS - AM"},

  {"nome": "SANTO ANDRE",
  "razaoSocial": "TRANDAFILOV, CAMPOS E MARQUES LTDA",
  "cnpjClinica": "44.784.620/0001-34",
  "enderecoClinica": "AV. QUEIROS DOS SANTOS, Nº 208 - CENTRO - CEP: 09015-310, SANTO ANDRÉ/SP" },

  {"nome": "NOVO REPARTIMENTO",
  "razaoSocial": "DANTAS, AGUIAR E SANTINI LTDA",
  "cnpjClinica": "45.650.359/0001-42",
  "enderecoClinica": "AV. BEIJA-FLOR, Nº 09, QUADRA 26 - PARQUE UIRAPURU - CEP: 68473-000, NOVO REPARTIMENTO/PA"},
  
  {"nome": "CAMPINA GRANDE CENTRO",
  "razaoSocial": "RTD, PINHEIRO E ROMIER LTDA",
  "cnpjClinica": "44.384.553/0001-60",
  "enderecoClinica": "AV. PRESIDENTE JOÃO PESSOA, Nº 21 - CENTRO - CEP: 58400-002, CAMPINA GRANDE - PB"},

]

let botao = document.getElementById("botao");
botao.addEventListener('click',GerarContrato)

//Função para adicionar os dados preenchidos no contrato
function GerarContrato() {

    let select = document.getElementById("clinicas");
    let texto = select.options[select.selectedIndex].text;
    let nomeClinica = document.querySelector("#nome-clinica")
    let cnpjClinica = document.querySelector("#cnpj-clinica")
    let enderecoClinica = document.querySelector("#endereco-clinica")

    for (let i = 0; i < clinica.length; i++) {
      if(texto == clinica[i].nome){
       nomeClinica.innerHTML = clinica[i].razaoSocial;
       cnpjClinica.innerHTML = clinica[i].cnpjClinica;
       enderecoClinica.innerHTML = clinica[i].enderecoClinica;
       break;
      } 
     }

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

    let desativar = document.getElementById("on-off");
     desativar.style.margin= 'auto';
    window.print();
  } 

