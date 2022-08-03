//calcular media de alunos com for

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];                   //+= soma a variável com ela mesma
}

let media = somaDasNotas/notas.length;

console.log(media);