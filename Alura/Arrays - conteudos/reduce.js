/* Com a média de todos os alunos de 3 salas, calculo a média geraldo de cada sala:

const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];*/

const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador,atual)=> //reduce tem acumulador e o atual, pois precisa juntar todos os ítens da array
    atual+acumulador,0)//como é uma soma das notas da array, o valor inicial é 0.
    return somaDasNotas/notasDaSala.length;
}

console.log(`A média da sala de JS ${mediaSala(salaJS)}`);
console.log(`A média da sala de Java ${mediaSala(salaJava)}`);
console.log(`A média da sala de Python ${mediaSala(salaPython)}`);