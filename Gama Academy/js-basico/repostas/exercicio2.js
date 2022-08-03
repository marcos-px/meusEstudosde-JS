// | Exemplo 02 | Descrição |

// | `Concatenar x interpolar` | Vamos criar variaveis usando let, const e var, 
// atribuir strings e vamos concatenar e interpolar. |


var salario = 1212

let aluguel = 700.00
let compras = 600.00
let luz = 150.00
let agua = 80.00
let internet = 99.00

const soma = aluguel + compras + luz + agua + internet
const diferenca = salario - soma
const conversao = diferenca - diferenca - diferenca

console.log("Seus gastos mensais são: \n" + " aluguel: " + aluguel + "\n compras: " + compras + "\n agua: " + agua + "\n internet: " + internet + "\n");
console.log(`total gasto =  R$${soma},00`);
console.log(`Você precisa fazer mais R$${conversao},00 de freela.`)