/*| Exemplo 10 | Descrição |
| --- | --- |
| `É dia de aula?` | Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma. |*/

let resultado = diaDeAula("Quinta")
console.log(resultado)

function diaDeAula(dia) {   
    if (dia === "Segunda" || dia === "Quarta" || dia === "Sábado")
    return "Aula Síncrona com Alice Paixão.";
    if (dia === "Terça")
    return "Tira Dúvidas.";
    else{
        return "Não temos aula hoje!"
    }

}