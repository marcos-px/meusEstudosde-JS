//cria array nativa e verifica a sequencia dessa array
// var pets = 'Lupita', 'Elis', 'Regina';

// pets;

// var sequence = pets
// console.log(sequence.length);

//converte string em array
// var pets = 'Lupita,Elis,Regina';
// var petsArray = pets.split(',');
// petsArray;

// console.log(petsArray)

//function com if e else if
// function altura(receberAltura)
//     {
//     if(receberAltura>=180)
//     {
//         console.log("Estatura Alta");
//     }
//     else if (receberAltura>=160 && receberAltura<180)
//     {
//         console.log("Estatura Média");
//     }
//     else if (receberAltura<160){
//         console.log("Estatura Baixa")
//     }
//     }
//     altura(180);

function altura(valoraltura){
        
    if(valoraltura >= 170){
        console.log("você é alto")
    
    } else if(valoraltura < 170 && valoraltura >= 150){
        console.log("você é mediano")
    

    }else if(valoraltura < 150){
        console.log("voce é baixo")
    }
}

altura(170)



