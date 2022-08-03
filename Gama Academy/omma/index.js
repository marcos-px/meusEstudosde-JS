const nomeEmpresa = "Omma";
console.log(nomeEmpresa);
const listaDeReceitas = [ // isso é uma lista
 { // isso é um atributo name: value, ;
   id: 1, //a
   titulo: "Bolo", //b
   dificuldade: "moderada", //c
   ingredientes: ['Blá','Blá','Blá','Blá','Blá' ],   //d
   preparo: "Assar", //e
   link: 'vimeo.com', //f
   vegano: false
​
 } // isso é um objeto é uma receita 
];
const cadastrarReceita = (
   id, titulo, dificuldade,ingredientes,preparo,link, vegano
​
) => {
  const novaReceita = {
    id, 
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link, 
    vegano
  };
  listaDeReceitas.push(novaReceita);
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
}
cadastrarReceita(
    2, 
    "Panqueca",
    "simples", 
    ['Blá','Blá','Blá','Blá','Blá' ], 
    "Fritar", 
    'youtube.com', 
    false
);
console.log(listaDeReceitas)

/* 5 -Devemos criar uma função chamadaexibirReceitas queirá listar no
console, todas as receitas cadastradas. Porém ao exibir cada receita deve
apenas os seguintes atributos devem ser mostrados:
a.Titulo da Receita
b.Lista de Ingredientes
c.Se é vegana ou não*/

function exibirReceitas() {
    

/*6 - Devemos criar uma função que nos permita deletar uma receita, e o nome
serádeletarReceita ela irá receber como parâmetroo identificador da
receita. Caso o identificador não seja encontrado deve exibir a seguinte
mensagem:“Receita não encontrada”. Se a receita forencontrada deve
ser deletada da lista e exibir uma mensagem de sucesso no console.*/
