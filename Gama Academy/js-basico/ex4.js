//Crie uma função que calculo de potencias
//Pode usar a biblioteca math se quiser


// potencia(2,2); // Aqui estamos instânciando, chamando a função que você construiu
// Tem que imprimir o valor de 4

var contador
var resultado
var num
num = 2
function tabuada(){
    for(contador = 0; contador <=10; contador++){
        resultado = contador*num
    }
}
console.log(num + " x " + tabuada + " " + resultado)