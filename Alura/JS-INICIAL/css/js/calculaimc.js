var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) { //for pega todos os arrays - no caso todos os pacientes. for , cria uma variável, geralmente i,  = 0; variável que eu quero alterar, no caso a classe pacientes, e continua a estrutura.
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
var imcText = paciente.querySelector(".info-imc")

var peso = tdPeso.textContent;

var tdAltura  = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <=0 || peso >= 400){ 
    console.log("peso Inválido");
    pesoEhValido = false;
    imcText.textContent = "Peso Inválido!";
    paciente.classList.add("paciente-invalido")
}

if(altura <0 || altura >= 3.00){
    console.log("altura Inválida!");
    alturaEhValida = false;
    imcText.textContent = "Altura Inválida!";
    paciente.classList.add("paciente-invalido")
//alterei a variavel. style e o mesmo estilo do css com o atributo comum.

}

if( alturaEhValida && pesoEhValido){
var imc = calculaImc(peso,altura);
imcText.textContent = imc; //imc.toFixed(2); //toFixed() entre parênteses a quantidade de casas decimais.
}

}

function calculaImc(peso,altura){ //cria a função pra poder chamar ela em outro arquivo tbm.
    var imc = 0;

    imc = peso /(altura * altura)
    return imc.toFized(2);
}

// Escutador de evento

// // titulo.addEventListener("click", mostraMensagem)
// // function mostraMensagem(){ função nomeada
// //     titulo.textContent = "Clicou"
// // }


