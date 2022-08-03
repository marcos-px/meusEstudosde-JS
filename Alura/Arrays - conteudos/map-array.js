//Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto em suas notas:10,9,8,7,6

const notas = [10,9,8,7,6];

const notasAtualizadas = notas.map ( nota => nota === 10 ? nota : nota+1);//if e else em operador ternário. Em vez de nota+1 pode usar o ++nota tb

console.log(notasAtualizadas); //Adiciona um ponto extra. - o map retorna algo, o forEach apenas executa, não retorna dados, a gente quer uma nova array.