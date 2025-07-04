let mostraHTML = document.getElementById("mostraHTML");
let numero = parseInt(Math.random() * 101);

function adivinha() {
 let numadiv = Number(window.prompt("Digite um número de 1 a 100"));

 mostraHTML.innerHTML += `<p>Você escolheu ${numadiv}.</p>`;
 console.log("Número secreto:", numero); // útil para testes

    if (numadiv > numero) {
        mostraHTML.innerHTML += `<p>Meu número é MENOR que ${numadiv}.</p>`;
    } else if (numadiv < numero) {
        mostraHTML.innerHTML += `<p>Meu número é MAIOR que ${numadiv}.</p>`;
    } else {
        mostraHTML.innerHTML += `<p><strong>Parabéns! Você acertou o número ${numero}!</strong></p>`;
    }
}
