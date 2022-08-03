/*Nós temos que criar uma função que vai receber o nome de um aluno, procurar esse aluno em uma lista de alunos e caso o aluno esteja 
presente nessa lista retornar a média deste aluno, ou retornar uma mensagem se o aluno não foi encontrado na lista, ou seja, 
se o aluno não fizer parte daquela lista de classe, por exemplo, nós temos que dar uma mensagem de retorno dizendo que o aluno não foi localizado.*/

const alunos = ['João','Juliana','Caio','Ana'];
const mediaDosAlunos = [10,7,9,6];

let listaDeNotasEALunos = [alunos,mediaDosAlunos];

const exibeNomeeNota = (nomeDoAluno)    => {
    if (listaDeNotasEALunos[0].includes(nomeDoAluno)) { //se a lista - duas dimensões - 0 = alunos, includes verifica se o que estamos procurando está incluso na lista e repete o nome da arrow function.
        let indice = listaDeNotasEALunos[0].indexOf(nomeDoAluno) //índice verifica se dentro da lista de alunos, na lista 0 - alunos - valida o nome do aluno.
        return listaDeNotasEALunos[0][indice] + ' , sua média é ' +//acessa a lista de alunos e depois verifica o indice (nomeDoAluno)
        listaDeNotasEALunos[1][indice]
    } else {
        return 'Aluno não foi localizado'
    }

};

console.log(exibeNomeeNota("Caioo")) /*no console.log (retorna nome da função("Nome do indice a procurar")*/
