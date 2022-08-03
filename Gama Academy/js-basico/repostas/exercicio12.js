/*| Exemplo 12 | Descrição |
| --- | --- |
| `Par ou Impar` | Crie uma função que determina se um número é par ou impar.  |*/

let resultado = direciona(2021);
console.log(resultado);

function direciona(numero) {
    if (numero % 2 === 0)
    return "Esse número é par."
    else{
        return "Esse número é impar."
    }

}