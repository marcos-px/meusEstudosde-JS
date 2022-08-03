const nomeEmpresa = "Omma";
console.log(nomeEmpresa);

const listaDeReceitas = [ // isso é uma lista
 { // isso é um atributo name: value, ;
   id: 1, //a
   titulo: "Pão de Queijo", //b
   dificuldade: "moderada", //c
   ingredientes: ['Polvilho', 'Queijo' ],   //d
   preparo: "Assar", //e
   link: 'vimeo.com', //f
   vegano: false
 } // isso é um objeto é uma receita 
];
const cadastrarReceita = (
   id, titulo, dificuldade,ingredientes,preparo,link, vegano
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
    "Bolo Diet",
    "simples", 
    ['Massa Vilma', 'leite','ovos' ], 
    "Fritar", 
    'youtube.com', 
    false
);

console.table(listaDeReceitas)

// console.log(listaDeReceitas)


const exibirReceitas = listaDeReceitas.forEach(atributos => {
  console.log(`Título da Receita: ${atributos.titulo}`)
  console.log(`Ingredientes da Receita: ${atributos.ingredientes}`)
  console.log(`É vegano ? ${atributos.vegano}`)
  console.table(atributos)

})


const deletarReceitas = (id) => {
  const indice = id-1;
  for (let i = 0; i <=listaDeReceitas.length; i++){
    if (listaDeReceitas[i].id === id) {
      listaDeReceitas.splice(indice, 1);
      console.log (`A receita ${titulo} foi excluída!`);
      break;
    } else {
      console.log ("Receita não encontrada")
    }
  }
};

/*Devemos criar uma função chamada buscarReceita que irá receber por
parâmetro um termo a ser buscado no título da receita. Deverá exibir todas
as receitas que contenha a palavra/termo buscado.*/

// const buscarReceita = listaDeReceitas.filter((termo) => {
// if (listaDeReceitas.indexOf({titulo: (termo)})){
//   return 'ok'
// } else {
//   return 'not ok'

// })

// console.log(buscarReceita("oi"))

const buscarReceita = listaDeReceitas.find(element => element.titulo ==='Bolo Diet');
console.log("-----------------------------------------------------------------")
console.table(buscarReceita)

/*Devemos criar uma função chamada atualizarReceita que deverá receber
o identificador da receita e todas as informações que podem ser alteradas.
Só deverá ser atualizado o identificador informado, caso não exista deve
ser dado um feedback ao usuário.*/

const atualizarReceita = listaDeReceitas.forEach(ide => { //ainda não finalizado
  console.log("Altere os seguintes ítens : " + ide.titulo + "\n" + ide.dificuldade + "\n" + ide.ingredientes + "\n" + ide.vegano + "\n" + ide.preparo+ "\n");
  listaDeReceitas.splice(0,0,1,2,3,4,5,6)
    console.log('Não existe o id informado.')
  id=1 
})
