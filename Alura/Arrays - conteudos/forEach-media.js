const notas = [10, 6.5, 8, 7.5]; //criando com forEach
let somaDasNotas = 0;


//CallBack function
notas.forEach(nota =>  //arrow funtcion sem as chaves - forEach faz o loop
    somaDasNotas += nota
);

let media = somaDasNotas/notas.length

console.log(media);