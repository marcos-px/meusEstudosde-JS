/*
| Exemplo 15 | Descrição |
| --- | --- |
| `Conversor de temperatura` | Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit. |*/

//formula celsius *9/5 + 32


function converteCelsius(celsius){
    let conversao = celsius;
    let fahrenheit = celsius * 9/5 + 32;
    console.log("São :" + fahrenheit + "ºF")
}

converteCelsius(20)

