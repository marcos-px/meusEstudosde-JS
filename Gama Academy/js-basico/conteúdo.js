//Primeira aula

// var myName = "Marcos"

// var age = 28

// var height = 1.80

// null
// undefined

// console.log(age, height)

// var person = {
//     "name": "Simara",
//     "age":32
// } //objeto

// var student = ["Simara", "Maria". "Joao"] //uma array - string que pode ser chamada.

// function sum(a,b) {
//     return a+b
// } //funtion

//operador typeof

// var isStudent = null;
// console.log(typeof isStudent) //fala qual o tipo de dados

//Operadores aritméticos
//adição +
// var sumTwoNumbers = 1+3
// console.log(sumTwoNumbers)
// subtração - 
// var subTwoNumbers = 1-3
// console.log(subTwoNumbers)
// multiplicação *
// var mulTwoNumbers = 1*3
// console.log(mulTwoNumbers)
// divisão /
// var divTwoNumbers = 4/5
// console.log(divTwoNumbers)
//módulo ou resto da divisão %
// var restDivis = 7%3
// console.log(restDivis)
// incremento ++
// var num = 7;
// console.log(++num) //adiciona 1
//decremento --
// var num = 16;
// console.log(--num) // tira 1

//Operadores de atribuição

//= recebe - atribuição
// todos os aritméticos seguido de um igual

//atribuição de soma

// var x = 3
// var y = 3
// console.log(x+=y)
// console.log(x*=y)
// console.log(x/=y)
// console.log(x-=y)
// console.log(x%=y)

//Operadores de comparação
// == compara valor
// === compara tipo
// != diferente de
//< menor que <= menor ou igual
//>maior >=maior ou igual

//operadores lógicos
//&& e
//|| ou
//! negação

//condicionais
//verificar se uma variável é evrdadeira, execute tal código

// var num = 1
// num = 5

// if (num === 1) { //se
//     console.log("num é igual a 1")
// } else if (num === 2) { //senão se
//     console.log("num é igual a 2")
// } else { //senão
//     console.log("num é 5")
// }

// var mes ="janeiro"

// switch(mes){
//     case"fevereiro": //dois pontos
//     console.log("mes 2");
//     break;

//     case "março": //dois pontos
//     console.log("mes 3");
//     break;

//     case "janeiro"://dois pontos
//     console.log("mes 1");
//     break;

//     default: //dois pontos - default é se nenhum for.
//         console.log("nenhum mês")
// }

//Estrutura de Repetição
//Usa quando está usando uma array

// var colors = ["black", "white", "yellow", "green", "blue"]; //array usa colchetes

// for (var i = 0; i < colors.length; i++ ){ //for - enquanto - a variável inicia pelo 0 , i e seu comprimento, adiciona mais um ao i usando o ++
//     console.log(colors[i]);
// } //inicia pelo zero - black

// var colors = ["black", "white", "yellow", "green", "blue"]; //array usa colchetes

// for (var i = 0; i < 5; i++ ){ //for enquanto for menor que o ítem 4
//     console.log(colors[i]);
// } //inicia pelo zero - black

// for (var i = 1; i < 10; i++ ){
//     console.log(i);
// }

// function sayHello(name, lastname) {
//     console.log("Olá " + name + " " + lastname)
// }

// sayHello("Marcos", "Teixeira");

// function sum (a,b){
//     return a + b;
// }

// sum (1,2)

// console.log(sum(1,2)); // funtion.

// class Book {
//     constructor(title, author, pages){
//         this.title = title;
//         this.author = author;
//         this.pages = pages;

//     }
//     read (){
//         return `Estou lendo ${this.title}`
//     }
// }

// let book = new Book ("livro", "Marcos", "300" );
// let otherbook = new Book ("outrolivro", "marcos2", "300" );      
// console.log(book, otherbook);

// class itBook extends Book { 
//     constructor(title, author, pages, technology){ //herda do outro, e adiciona o que eu quero. 
//         super(title, author, pages);
//     this.technology = technology;

//     let itBook = new itBook ("livro", "Marcos", "300", "Algoritmos" );
   
// console.log (itBook);
// }}

// class Person {
//     constructor(name) { this._name = name; }
//     get name()
//         { return this._name; }

//         set name (value) {
//             this._name = value
// }
// }

// let person = new Person("Marcos");
// person.name = "Marquinhos"
// console.log(person.name);

// console.log("Olá Mundo!");
// console.log("O ser humano só envelhece quando seus lamentos substituem os seus sonhos.");

// var number;
// let service;

// 

// var numeroA = "36"
// var numeroB = "28"

// console.log(numeroA*numeroB)

//JS AVANÇADO


