let inscritos = 0;
let equipes = 0;

contador = 0;
function calcular() {
  inscritos+= 1;
  equipes =  parseint(inscritos / 3)
    alert( " possuem " + inscritos+ " restam" + equipes);

    if(equipes >= 4){
      alert("é possivel formar 4 equipes. o campeonato pode iniciar1");
    }

}