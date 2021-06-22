var alarmeSelecao = 0;
var botaoD = 0;
var botaoS = 0;
var botaoT = 0;
var botaoQ =0;
var botaoQui = 0;
var botaoSe = 0;
var botaoSab = 0;
var botaoSoneca = 0;
var botaoFeriado = 0;
var alarmeHoras = 0;
var som=0;
var alarmeDias = new Array();
var soneca
var nomeDoAlarme

var alarmeNotas
var feriado
var anotacoesAlarme
onload = () => {
    document.getElementById('botaofechar').onclick=function(){
    window.location.assign("telaAlarmes.html")
    }

    alarmeSelecao = localStorage.getItem("alarmeSelecao");
    var pastaAtual = localStorage.getItem("pastaAtual")
    var pegar =JSON.parse(localStorage.getItem("A" + pastaAtual) )
    switch (alarmeSelecao) {
        case "0":


            break;
        case "1":
            document.getElementById("nomeAlarme").value = pegar[1].nome
            document.getElementById("agendamento").value = pegar[1].horas
            botaoD = pegar[1].dias[0];
            botaoS = pegar[1].dias[1];
            botaoT = pegar[1].dias[2];
            botaoQ = pegar[1].dias[3];
            botaoQui = pegar[1].dias[4];
            botaoSe = pegar[1].dias[5];
            botaoSab = pegar[1].dias[6];
            
            botaoSoneca = pegar[1].botaoSoneca
            botaoFeriado = pegar[1].feriado
            document.getElementById("soneca").value = pegar[1].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[1].notas
            console.log(pegar[1].som)
            switch(pegar[1].som){
                case 1:
                    document.getElementById("dropdownMenuButton").innerHTML="som1";
                    break;
                    case 2:
                        document.getElementById("dropdownMenuButton").innerHTML="som2";
                        break;
                        case 3:
                            document.getElementById("dropdownMenuButton").innerHTML="som3";
                            break;
            }
            break;
        case "2":
            document.getElementById("nomeAlarme").value = pegar[2].nome
            document.getElementById("minutos").value = pegar[2].minutos
            botaoD = pegar[2].dias[0];
            botaoS = pegar[2].dias[1];
            botaoT = pegar[2].dias[2];
            botaoQ = pegar[2].dias[3];
            botaoQui = pegar[2].dias[4];
            botaoSe = pegar[2].dias[5];
            botaoSab = pegar[2].dias[6];
            botaoSoneca = pegar[2].botaoSoneca
            botaoFeriado = pegar[2].feriado
            document.getElementById("soneca").value = pegar[2].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[2].notas
            break;
        case "3":
            document.getElementById("nomeAlarme").value = pegar[3].nome
            document.getElementById("minutos").value = pegar[3].minutos
            botaoD = pegar[3].dias[0];
            botaoS = pegar[3].dias[1];
            botaoT = pegar[3].dias[2];
            botaoQ = pegar[3].dias[3];
            botaoQui = pegar[3].dias[4];
            botaoSe = pegar[3].dias[5];
            botaoSab = pegar[3].dias[6];
            botaoSoneca = pegar[3].botaoSoneca
            botaoFeriado = pegar[3].feriado
            document.getElementById("soneca").value = pegar[3].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[3].notas
            break;
        case "4":
            document.getElementById("nomeAlarme").value = pegar[4].nome
            document.getElementById("minutos").value = pegar[4].minutos
            botaoD = pegar[4].dias[0];
            botaoS = pegar[4].dias[1];
            botaoT = pegar[4].dias[2];
            botaoQ = pegar[4].dias[3];
            botaoQui = pegar[4].dias[4];
            botaoSe = pegar[4].dias[5];
            botaoSab = pegar[4].dias[6];
            botaoSoneca = pegar[4].botaoSoneca
            botaoFeriado = pegar[4].feriado
            document.getElementById("soneca").value = pegar[4].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[4].notas
            break;
        case "5":
            document.getElementById("nomeAlarme").value = pegar[5].nome
            document.getElementById("minutos").value = pegar[5].minutos
            botaoD = pegar[5].dias[0];
            botaoS = pegar[5].dias[1];
            botaoT = pegar[5].dias[2];
            botaoQ = pegar[5].dias[3];
            botaoQui = pegar[5].dias[4];
            botaoSe = pegar[5].dias[5];
            botaoSab = pegar[5].dias[6];
            botaoSoneca = pegar[5].botaoSoneca
            botaoFeriado = pegar[5].feriado
            document.getElementById("soneca").value = pegar[5].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[5].notas
            break;





    }
    document.getElementById("som1").onclick=function(){
        document.getElementById("dropdownMenuButton").innerHTML="som1"
       som=1
       
    }
    document.getElementById("som2").onclick=function(){
        document.getElementById("dropdownMenuButton").innerHTML="som2"
     som=2
  
    }
    document.getElementById("som3").onclick=function(){
        document.getElementById("dropdownMenuButton").innerHTML="som3"
        som=3
        
    }

    if (botaoD == 0) {
        document.getElementById("botaoD").style.background = "#2B5C7C";

    }
    else {
        document.getElementById("botaoD").style.background =  "#C30000"
            ;

    }
    if (botaoS == 0) {
        document.getElementById("botaoS").style.background = "#2B5C7C";

    }
    else {
        document.getElementById("botaoS").style.background =  "#C30000"
            ;
    }
    if (botaoT == 0) {
        document.getElementById("botaoT").style.background = "#2B5C7C";

    }
    else {
        document.getElementById("botaoT").style.background = "#C30000"
            ;

    }
    if (botaoQ == 0) {
        document.getElementById("botaoQ").style.background = "#2B5C7C";

    }
    else {
        document.getElementById("botaoQ").style.background =  "#C30000"
            ;

    }
    if (botaoQui == 0) {
        document.getElementById("botaoQui").style.background = "#2B5C7C";

    }
    else {
        document.getElementById("botaoQui").style.background = "#C30000"
            ;

    }
    if (botaoSe == 0) {
        document.getElementById("botaoSe").style.background = "#2B5C7C";

    }
    else {
        document.getElementById("botaoSe").style.background =  "#C30000"
            ;

    }
    if (botaoSab == 0) {
        document.getElementById("botaoSab").style.background = "#2B5C7C";


    }
    else {
        document.getElementById("botaoSab").style.background =  "#C30000"
            ;


    }
    if (botaoSoneca == 0) {
        document.getElementById("sonecaPlace").style.background = "#2B5C7C";


    }
    else {
        document.getElementById("sonecaPlace").style.background = "#2B5C7C";


    }
    if (botaoFeriado == 0) {

        botaoFeriado = 1;
    }
    else {

        botaoFeriado = 0;
    }
    document.querySelector('#botaosalvar').onclick = function () {

        
       
        var primeiro = pegar[0];
        
        
        alarmeHoras = document.getElementById("agendamento").value;
        
        alarmeDias = new Array();
        alarmeDias[0] = botaoD;
        alarmeDias[1] = botaoS;
        alarmeDias[2] = botaoT;
        alarmeDias[3] = botaoQ;
        alarmeDias[4] = botaoQui;
        alarmeDias[5] = botaoSe;
        alarmeDias[6] = botaoSab;
        soneca = document.getElementById('soneca').value;
        nomeDoAlarme = document.getElementById("nomeAlarme").value;

        alarmeNotas = document.getElementById("notasDoAlarmeBox").value;
        feriado = botaoFeriado;
        
        var novoAlarme = new Array;
        novoAlarme = pegar
        
        if (alarmeSelecao == 0) {
            primeiro++;
            novoAlarme[primeiro] = criarAlarme(alarmeHoras,som, alarmeDias, nomeDoAlarme, alarmeNotas, soneca, feriado, botaoSoneca,);
alarmeSelecao++
            novoAlarme[0] = primeiro;
        }
        else {
            novoAlarme[primeiro] = criarAlarme(alarmeHoras,som,  alarmeDias, nomeDoAlarme, alarmeNotas, soneca, feriado, botaoSoneca,);
        }
        localStorage.setItem("A"+pastaAtual, JSON.stringify(novoAlarme));

        alert("alarme salvo com sucesso!");
        window.location.assign("telaAlarmes.html")




    }

    function criarAlarme(chave1,chave2, chave3, chave4, chave5, chave6, chave7, chave8, ) {
        let newAlarme = {
            "horas": chave1,
            "som":chave2,
            "dias": chave3,
            "nome": chave4,
            "notas": chave5,
            "soneca": chave6,
            "feriado": chave7,
            "botaoSoneca": chave8,

        }
        return newAlarme;
    }
    function tocarAlarme(grupoAlarmes) {

    }
    function ligarBotao(botao) {
        if (botao == 0) {
            botao == 1;
        }
        else {
            botao == 0

        }

        return botao;
        

    }
    document.getElementById("botaoD").onclick = botaoD = ligarBotao(botaoD);
    document.getElementById("botaoD").onclick = function () {
        if (botaoD == 0) {
            document.getElementById("botaoD").style.background = "#C30000";
            botaoD = 1;

        }
        else {
            document.getElementById("botaoD").style.background = "#2B5C7C";
            botaoD = 0;

        }

    }


    document.getElementById("botaoS").onclick = function () {
        if (botaoS == 0) {
            document.getElementById("botaoS").style.background = "#C30000";
            botaoS = 1;
        }
        else {
            document.getElementById("botaoS").style.background = "#2B5C7C"
                ;
            botaoS = 0;
        }

    }

    document.getElementById("botaoT").onclick = function () {
        if (botaoT == 0) {
            document.getElementById("botaoT").style.background = "#C30000";
            botaoT = 1;
        }
        else {
            document.getElementById("botaoT").style.background = "#2B5C7C"

        }

    }

    document.getElementById("botaoT").onclick = function () {
        if (botaoT == 0) {
            document.getElementById("botaoT").style.background = "#C30000";
            botaoT = 1;
        }
        else {
            document.getElementById("botaoT").style.background = "#2B5C7C"
                ;
            botaoT = 0;
        }

    }

    document.getElementById("botaoQ").onclick = function () {
        if (botaoQ == 0) {
            document.getElementById("botaoQ").style.background = "#C30000";
            botaoQ = 1;
        }
        else {
            document.getElementById("botaoQ").style.background = "#2B5C7C"
                ;
            botaoQ = 0;
        }

    }
    document.getElementById("botaoQui").onclick = function () {
        if (botaoQui == 0) {
            document.getElementById("botaoQui").style.background = "#C30000";
            botaoQui = 1;
        }
        else {
            document.getElementById("botaoQui").style.background = "#2B5C7C"
                ;
            botaoQui = 0;
        }

    }
    document.getElementById("botaoSe").onclick = function () {
        if (botaoSe == 0) {
            document.getElementById("botaoSe").style.background = "#C30000";
            botaoSe = 1;
        }
        else {
            document.getElementById("botaoSe").style.background = "#2B5C7C"
                ;
            botaoSe = 0;
        }

    }
    document.getElementById("botaoSab").onclick = function () {
        if (botaoSab == 0) {
            document.getElementById("botaoSab").style.background = "#C30000";
            botaoSab = 1;

        }
        else {
            document.getElementById("botaoSab").style.background = "#2B5C7C"
                ;
            botaoSab = 0;

        }

    }
    document.getElementById("botaoSonecaToggle").onclick = function () {
        if (botaoSoneca == 0) {
            document.getElementById("sonecaPlace").style.background = "#2B5C7C";
            botaoSoneca = 1;

        }
        else {
            document.getElementById("sonecaPlace").style.background = "#2B5C7C";
            botaoSoneca = 0;

        }
    }
    document.getElementById("botaoFeriadoToggle").onclick = function () {
        if (botaoFeriado == 0) {

            botaoFeriado = 1;
        }
        else {

            botaoFeriado = 0;

        }

}
    
    }

