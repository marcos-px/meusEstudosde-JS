/*Dividir uma sala de aula em duas listas com a mesma
quantidade de alunos*/
/*Nomes: 'João', 'Juliana', 'Ana', 'Caio','Lara',
'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre',
'Carlos', 'Paulo', 'Bia', 'Vivian','Isabela', 'Vinicius',
'Renan', 'Renata','Daisy','Camilo'.*/

const nomes = ['João', 'Juliana', 'Ana', 'Caio','Lara',
'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre',
'Carlos', 'Paulo', 'Bia', 'Vivian','Isabela', 'Vinicius',
'Renan', 'Renata','Daisy','Camilo'];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);//não coloca nada pois vai até o fim do array

console.log(`Alunos da Sala1: ${sala1} \n`)
console.log(`Alunos da Sala2: ${sala2}\n`)
console.log(nomes.length/2)
