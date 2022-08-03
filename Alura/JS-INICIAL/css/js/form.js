var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click",function (event){
    event.preventDefault(); //previne atualização da página e ações do usuário.

    var form = document.querySelector("#form-adiciona");

    console.log(form.altura.value); //utiliza o name do form, do html mesmo.
    var nome = form.nome.value; // cria a variável com  a variável inicial.name.value (valor que quer pegar do form).
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr"); 
    // cria a tag que seleciona no HTML.

    var nomeTd = document.createElement("td"); // cria a td
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);


    pacienteTr.appendChild(nomeTd); // appendChild coloca como filho de uma tag no HTML e adiciona ela.
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    var tabela = document.querySelector("#tabela-pacientes");
    

    tabela.appendChild(pacienteTr); // coloca na tabela o paciente tr, um dentro do outro, o td dentro do tr;.
});

