/*| Exemplo 08 | Descrição |
| --- | --- |
| `Semaforo, sinal ou sinaleira?` | Utilizando os conceitos que estudamos, 
vamos criar um programa que funcionará como um sinal de transito. |*/

function semaforo (cor){
    if(cor === 'Verde'){
        console.log("Pode Passar");
    }if(cor === 'Amarelo'){
        console.log("Espere um pouco");
    }if(cor === 'Vermelho'){
    console.log('Pare');
    
    }
    return cor;

}

let corAtual = semaforo('Verde')
console.log(corAtual);