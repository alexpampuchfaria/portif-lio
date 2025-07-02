let mostraHTML = document.getElementById("mostraHTML");


function cliques(){
    let meses = prompt("Digite um mes: ").toUpperCase();
    let estacao
    let cor

    if (meses === "DEZEMBRO" || meses === "JANEIRO" || meses === "FEVEREIRO"){
        estacao = "verao"
        cor = "#"
    }else  if (meses === "MARÇO" || meses === "ABRIL" || meses === "MAIO") {
        estacao = "Outono"
    }else  if (meses === "JUNHO" || meses === "JULHO" || meses === "AGOSTO" ) {
        estacao = "Inverno"
    }else  if (meses === "SETEMBRO" || meses === "OUTUBRO" || meses === "NOVEMBRO") {
        estacao = "Primavera"

    }

    mostraHTML.innerHTML = `<p>O mes ${meses} pertence a estaçao: ${estacao} </p>`

    }



    
