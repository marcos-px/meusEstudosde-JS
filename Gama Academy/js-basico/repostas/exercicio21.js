// | Exemplo 21 | Descrição |
// | --- | --- |
// | `10 em 10` | Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".|


let x = 10;

while(x < 100) {

  x += 10;//conta de 10 em 10
  
  if(x === 60 || x === 90) {
    console.log("CONTINUE");
    continue;
  }

  console.log(x);

}