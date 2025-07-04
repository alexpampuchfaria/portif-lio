let mostraHTML = document.getElementById("mostraHTML");
let numero = 0
let numadiv = 0

numero = parseInt(Math.random() * 101);

function adivinha(){
    let frase


    numadiv = Number(window.prompt("Digite um numero de 1 a 100"));

    

    frase = mostraHTML.innerHTML += `<p>Voce escolheu ${numadiv}.</p>`

    console.log(numero);

    if(numadiv > numero){
        mostraHTML.innerHTML = `<p>Voce escolheu ${num_adiv}. meu numero é MAIOR</p>`
    }else{
        mostraHTML.innerHTML = `<p>Voce escolheu ${num_adiv}. meu numero é MENOR</p>`
    }

    if(numero == numadiv) {
         mostraHTML.innerHTML = '<p>Parabens voce acertou</p>'
    }

    

} 
