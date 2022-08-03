/*| Exemplo 16 | Descrição |
| --- | --- |
| `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo:  3! = 3 * 2 * 1 // 6 |*/

let resultado = fatorial(6)
console.log(resultado)

function fatorial(num) {
    let indice = num;
    while (indice > 1) {
      num *= indice-1;
      indice--;
    }
    return num;
  }
  