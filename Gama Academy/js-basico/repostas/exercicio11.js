/*| Exemplo 11 | Descrição |
| --- | --- |
| `IMC` | Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg. |*/

let imc = calculaImc(85,1.60)
console.log("Seu Imc é : " + parseFloat(imc.toFixed(2)));

let diagnosticoEscrito = diagnostico("")
console.log(diagnosticoEscrito);

function calculaImc(peso,altura){
    let imcTotal = peso/(altura*altura)
    return imcTotal;
}

function diagnostico(){
    if(imc < 18.5)
        return "Magreza - Subnutricão - GRAU 0";
    if(imc >= 18.5 && imc <= 24.9)
        return "Peso normal - GRAU 0";
    if (imc >=24.9 && imc <= 29.9)
        return "Sobrepeso - OBESIDADE GRAU 1";
    if (imc >=29.9 && imc <= 39.9)
        return "OBESIDADE GRAU 2";
    else{
        return "OBESIDADE GRAU 3";
    }

}