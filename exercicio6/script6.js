let cliques = 0; //criar variavel//
let mostraHTML = document.getElementById("mostraHTML");

//nao precisa do msmo nome q a div do html//

function contador(){
  
   cliques++;

    //tem varios jeitos de fazer o msm resultado  exemplo:
    // cliques += 1;
    // cliques = cliques + 1;//

    //alterar o valor do html pra motrar a variavel cliques//
    mostraHTML.innerHTML = `<p> numeros de cliques: ${cliques} </p>`;
    console.log(cliques);
    
}

function zerar(){

    cliques = 0;

     mostraHTML.innerHTML = `<p> numeros de cliques: ${cliques} </p>`;
     console.log(cliques);
    
}