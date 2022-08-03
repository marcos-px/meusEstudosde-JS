var pessoas = [{
    name: "Luana",
    receitas: [330.20, 440.50,780.77],
    despesas: [21.78, 44,56]
  },
  {
    nome: "Marcos",
    receitas: [14.4, 180.45, 130.47],
    despesas: [0.20, 458.44]
  },
];

function saldo(caixa){
    const entradas = caixa.receitas;
    caixa.despesas.forEach(num => entradas.push(num * -1))
    
    return soma(entradas);
}

function soma(numeros) {
    return numeros.reduce ((sum, num) => sum + num, 0);
}

const maior = pessoas.map(saldo);
console.log(maior);
console.log(maior.map((maior, i) => `${pessoas[i].name}`).join);
