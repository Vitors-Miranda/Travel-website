//pegando os valores do input
const diaria= document.getElementById("diaria");
const dias= document.getElementById("dias");

const combustivel= document.getElementById("combustivel");
const consumo= document.getElementById("consumo");

const distancia= document.getElementById("distancia");
//valores do label
const campodiaria= document.getElementById("campodiaria");
//valor do botão
const calcular= document.getElementById("btncalcular");

btncalcular.addEventListener("click",function(){
    //declarando variáveis
    let vdiaria, vdias,TotalHotel, vcombustivel, vconsumo, 
    TotalGasolina,vdistancia, tempo, totalViagem;

    vdiaria= parseInt(diaria.value);
    vdias= parseInt(dias.value);

    vcombustivel= parseInt(combustivel.value);
    vconsumo= parseInt(consumo.value);

    vdistancia= parseInt(distancia.value);
    //calculando
    TotalHotel= vdiaria*vdias;
    TotalGasolina= vcombustivel*vconsumo;
    Tempo= (vdistancia/80)*60;
    totalViagem= TotalHotel+TotalGasolina;
    //exibindo
    diaria.value= TotalHotel.toFixed(2);
    dias.value= TotalGasolina.toFixed(2);
    combustivel.value= Tempo.toFixed(2);
    consumo.value=totalViagem.toFixed(2);
    //desabilitanto a edição do input
    diaria.disabled=true;
    dias.disabled=true;
    combustivel.disabled=true;
    consumo.disabled=true;

    //trocando o label e botão
    campodiaria.innerText="Valor do Hotel:";
    campodias.innerText= "Gastos com Combustível:";
    campocombustivel.innerText= "Tempo(min) em 80 km/h:";
    campoconsumo.innerText= "Gastos Totais:";
    campodistancia.remove();
    btncalcular.innerHTML= "<a href='index.html'> Resetar</a>";
    //anulando o último campo
    distancia.remove();
})