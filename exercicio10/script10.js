function contar(){
     let mostraHTML = document.getElementById("mostraHTML");
     let contador = 1;

     

     while (contador <= 10) {
      if (contador % 2 === 0) { 
                    mostraHTML.innerHTML += `<b> <p> ${contador} </p></b>`;  
                } else {
                    mostraHTML.innerHTML += `<p> ${contador} </p>`; 
                }
                contador++;
            }


        }




   

  