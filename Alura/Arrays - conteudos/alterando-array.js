/*Criar uma lista de chamadas com os alunos:
- 'João', 'Ana', 'Caio','Lara', 'Marjorie', 'Leo' - 
Ana e Caio mudaram de escolha e Rodrigo entrou, então faça essa alteração.*/

const listaDeChamada  = ['João', 'Ana', 'Caio','Lara', 'Marjorie', 'Leo'];
//listaDeChamada.splice(1,2,'Rodrigo');//exclui e inclui.
listaDeChamada.splice(2,0,'Todos');//não excluiu nada, apenas adicionou, colocou o 0 como segundo parâmetro
console.log(listaDeChamada)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)