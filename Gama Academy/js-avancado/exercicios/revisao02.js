// | Exemplo 34 | Descrição |
// | --- | --- |
// | `Boletim escolar` | Crie um algoritmo que receba três notas de um aluno,
//  calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

//         - Se a media for igual ou maior que 7 - Aprovado
//         - Se a media for maior e igual a cinco e menor que 7 - Recuperação
//         - Se a media for menor que 5 - Reprovado|




function calculaMedia(nota1, nota2, nota3){

    let media = (nota1+nota2+nota3) /3

    if  (media >=7)
    return 'Aprovado'
    if (media >=5 && media <=6.99)
    return 'Recuperação'
    if (media <5){}
    return 'Reprovado'
    }


console.log(calculaMedia(1,3,10))

// const readline = require('readline-sync');
// var notaluno = "Boletim aluno";

// nota1 = readline.question("Qual a primeira nota do aluno? ")
// nota2 = readline.question("Qual a segunda nota do aluno? ") 
// nota3 = readline.question("Qual a terceira nota do aluno? ")

// media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3

// console.log(media)

//     if  (media >=7)
//     console.log("Aprovado");

//     if (media >=5 && media <=6.99)
//     console.log("Recuperação")

//     if (media <5)
//     console.log("Reprovado!")
    
//     else {
//         console.log("Nota Inválida")
//     }