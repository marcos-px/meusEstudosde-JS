// if...else

// if (idade >= 18) {
//     return 'Maior de idade'
// } else {
//     return 'Menor de idade'
// }

// idade >= 18 ? 'Maior de idade': 'Menor de idade'

// function calculaIdade(idade) {
//     return idade <= 15 ? 'Não vota':
//            idade >=16 ?  'Voto Opcional':
//            idade >=18 ? 'Voto Obrigatório':
//            idade <= 69 ? 'Voto Obrigatório':
//             idade >=70 ? 'Voto Opcional':'Voto Opcional'

const calculaIdade = (idade) => 
          idade <= 15 ? 'Não vota':
           idade >=18 ? 'Voto Obrigatório':
            idade >=70 ? 'Voto Opcional':'Voto Opcional'

// }
console.log(calculaIdade())

// function calculaIdade(idade) {
//     if (idade <=15){
//         return 'Não vota';
//     } else if (idade >=18){
//             return 'Voto Obrigatório';}
//              else if (idade >=70){
//                 return 'Voto Opcional';}
//             else {
//                 return 'Voto Opcional';}
//             }
    
//             console.log(calculaIdade(75))