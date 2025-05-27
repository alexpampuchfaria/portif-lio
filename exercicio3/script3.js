let resultado;
let nome;
let media;
let nomealuno;

nomealuno = (window.prompt("digite seu nome"));

var nota1 = Number(window.prompt("digite a primeira nota"));
var nota2 = Number(window.prompt("digite a primeira nota"));
var nota3 = Number(window.prompt("digite a primeira nota"));

let total = (nota1 + nota2 + nota3)/3;
alert("media final" + total);

if(total >=60){
    alert(nomealuno + " vc passou"+ total );
    alert(nomealuno + " aprovado");
}else{
    pontosfaltando = 60 - total;
     alert( nomealuno + " reprovado vc não passou" + pontosfaaltando + "pontos");

}
