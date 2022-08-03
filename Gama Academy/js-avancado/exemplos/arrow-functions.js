// function

// function soma(a,b) {
//     return a + b
// }

// console.log(soma(3,5)) //8

//arrow function

// const soma = (num1, num2) => num1 + num2

// const sayHello = name => `Hello ${name}`

// console.log(sayHello('Mari'))

const calculaIdade = (idade) => 
          idade <= 15 ? 'Não vota':
           idade >=18 ? 'Voto Obrigatório':
            idade >=70 ? 'Voto Opcional':'Voto Opcional'

console.log(calculaIdade(17))


// const reprovados = nomes.filter(aluno,indice) => ;//quando tem mais de um parâmetro na arrow funtcion coloca parênteses entre ele