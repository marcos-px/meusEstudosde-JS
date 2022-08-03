
let resultado = fizzBuzz(10);
console.log(resultado)

function fizzBuzz(entrada){
    if (entrada === 0)
    return entrada;
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
    return 'FizzBuzz';
    if (entrada % 3 === 0)
    return 'Fizz';
    if (entrada % 5 == 0)
    return 'Buzz'
    else{
        return entrada;
}
}