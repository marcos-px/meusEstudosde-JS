//Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos.
// ['Ana', 'Marcos','Maria','Mauro'];
// [7,4.5,8,7.5];

const nomes = ['Ana', 'Marcos','Maria','Mauro'];
const notas = [7,4.5,8,7.5];
//fileter apenas booleano
const reprovados = nomes.filter( (aluno,indice) => notas //quando tem mais de um parâmetro na arrow funtcion coloca parênteses entre ele  filter apenas boolean
[indice] <5)

console.log(`Aluno Reprovado: ${reprovados}`);