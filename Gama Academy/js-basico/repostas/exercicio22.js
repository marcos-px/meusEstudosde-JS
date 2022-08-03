/*| Exemplo 22 | Descrição |
| --- | --- |
| `conta bancária` | Vamos criar uma conta bancária com as 3 operações básicas? rs
    a) A conta deverá iniciar com o saldo de 100
    b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
    c) Deverá ser possível passar 1 valor para a operação escolhida
    d) Deverá retornar o resultado e imprimir no console o saldo atual|*/

function contaCorrente (movimentacao, valor){
    let saldoInicial = 100;
    switch(movimentacao){
        case 'depositar':
            saldoInicial += valor
            break
        case 'sacar':
            saldoInicial -= valor
            break
        case 'consultar saldo':
            saldoInicial
            break

        default:
            console.log('Dados Incorretos, informar dados corretos.');
        }
        return `Saldo total ${saldoInicial}`
}

console.log(contaCorrente('depositar', 503)); 
console.log(contaCorrente('sacar', 78));
console.log(contaCorrente('consultar saldo'));

