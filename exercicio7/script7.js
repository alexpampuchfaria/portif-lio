
let mostraHTML = document.getElementById("mostraHTML");

//declara variavel
let cliques = 0;

function aleatorio() {


    cliques= parseInt(Math.random() * 101);



    mostraHTML.innerHTML += `<p> pensei no número: ${cliques} </p>`;

}
function zerar(){

     mostraHTML.innerHTML = null;



}