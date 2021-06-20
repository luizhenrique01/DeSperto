var alarmeSelecao = 0;
var botaoD = 1;
var botaoS = 1;
var botaoT = 1;
var botaoQ = 1;
var botaoQui = 1;
var botaoSe = 1;
var botaoSab = 1;
var botaoSoneca = 1;
var botaoFeriado = 1;
var alarmeHoras = 1;
var alarmeMinutos = 1;
var alarmeDias = new Array();
var soneca
var nomeDoAlarme

var alarmeNotas
var feriado
var anotacoesAlarme
onload = () => {


    alarmeSelecao = localStorage.getItem("alarmeSelecao");
    var pastaAtual = localStorage.getItem("pastaAtual")
    var pegar = "A" + pastaAtual
    switch (alarmeSelecao) {
        case "0":


            break;
        case "1":
            document.getElementById("nomeAlarme").value = pegar[1].nome
            document.getElementById("horas").value = pegar[1].horas
            document.getElementById("minutos").value = pegar[1].minutos
            botaoD = pegar[1].dias[0];
            botaoD = pegar[1].dias[1];
            botaoD = pegar[1].dias[2];
            botaoD = pegar[1].dias[3];
            botaoD = pegar[1].dias[4];
            botaoD = pegar[1].dias[5];
            botaoD = pegar[1].dias[6];
            botaoSoneca = pegar[1].botaoSoneca
            botaoFeriado = pegar[1].feriado
            document.getElementById("soneca").value = pegar[1].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[1].notas
            break;
        case "2":
            document.getElementById("nomeAlarme").value = pegar[2].nome
            document.getElementById("horas").value = pegar[2].horas
            document.getElementById("minutos").value = pegar[2].minutos
            botaoD = pegar[2].dias[0];
            botaoD = pegar[2].dias[1];
            botaoD = pegar[2].dias[2];
            botaoD = pegar[2].dias[3];
            botaoD = pegar[2].dias[4];
            botaoD = pegar[2].dias[5];
            botaoD = pegar[2].dias[6];
            botaoSoneca = pegar[2].botaoSoneca
            botaoFeriado = pegar[2].feriado
            document.getElementById("soneca").value = pegar[2].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[2].notas
            break;
        case "3":
            document.getElementById("nomeAlarme").value = pegar[3].nome
            document.getElementById("horas").value = pegar[3].horas
            document.getElementById("minutos").value = pegar[3].minutos
            botaoD = pegar[3].dias[0];
            botaoD = pegar[3].dias[1];
            botaoD = pegar[3].dias[2];
            botaoD = pegar[3].dias[3];
            botaoD = pegar[3].dias[4];
            botaoD = pegar[3].dias[5];
            botaoD = pegar[3].dias[6];
            botaoSoneca = pegar[3].botaoSoneca
            botaoFeriado = pegar[3].feriado
            document.getElementById("soneca").value = pegar[3].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[3].notas
            break;
        case "4":
            document.getElementById("nomeAlarme").value = pegar[4].nome
            document.getElementById("horas").value = pegar[4].horas
            document.getElementById("minutos").value = pegar[4].minutos
            botaoD = pegar[4].dias[0];
            botaoD = pegar[4].dias[1];
            botaoD = pegar[4].dias[2];
            botaoD = pegar[4].dias[3];
            botaoD = pegar[4].dias[4];
            botaoD = pegar[4].dias[5];
            botaoD = pegar[4].dias[6];
            botaoSoneca = pegar[4].botaoSoneca
            botaoFeriado = pegar[4].feriado
            document.getElementById("soneca").value = pegar[4].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[4].notas
            break;
        case "5":
            document.getElementById("nomeAlarme").value = pegar[5].nome
            document.getElementById("horas").value = pegar[5].horas
            document.getElementById("minutos").value = pegar[5].minutos
            botaoD = pegar[5].dias[0];
            botaoD = pegar[5].dias[1];
            botaoD = pegar[5].dias[2];
            botaoD = pegar[5].dias[3];
            botaoD = pegar[5].dias[4];
            botaoD = pegar[5].dias[5];
            botaoD = pegar[5].dias[6];
            botaoSoneca = pegar[5].botaoSoneca
            botaoFeriado = pegar[5].feriado
            document.getElementById("soneca").value = pegar[5].soneca
            document.getElementById("notasDoAlarmeBox").value = pegar[5].notas
            break;





    }

    if (botaoD == 0) {
        document.getElementById("botaoD").style.background = "#C30000";

    }
    else {
        document.getElementById("botaoD").style.background = "#2B5C7C"
            ;

    }
    if (botaoS == 0) {
        document.getElementById("botaoS").style.background = "#C30000";

    }
    else {
        document.getElementById("botaoS").style.background = "#2B5C7C"
            ;
    }
    if (botaoT == 0) {
        document.getElementById("botaoT").style.background = "#C30000";

    }
    else {
        document.getElementById("botaoT").style.background = "#2B5C7C"
            ;

    }
    if (botaoQ == 0) {
        document.getElementById("botaoQ").style.background = "#C30000";

    }
    else {
        document.getElementById("botaoQ").style.background = "#2B5C7C"
            ;

    }
    if (botaoQui == 0) {
        document.getElementById("botaoQui").style.background = "#C30000";

    }
    else {
        document.getElementById("botaoQui").style.background = "#2B5C7C"
            ;

    }
    if (botaoSe == 0) {
        document.getElementById("botaoSe").style.background = "#C30000";

    }
    else {
        document.getElementById("botaoSe").style.background = "#2B5C7C"
            ;

    }
    if (botaoSab == 0) {
        document.getElementById("botaoSab").style.background = "#C30000";


    }
    else {
        document.getElementById("botaoSab").style.background = "#2B5C7C"
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

        var salvar = new Array
        salvar = JSON.parse(localStorage.getItem(pegar))
        var primeiro = salvar[0];
        console.log(salvar)
        alarmeHoras = 0;
        alarmeMinutos = 0;
        alarmeDias = new Array();
        alarmeDias[0] = botaoD;
        alarmeDias[1] = botaoS;
        alarmeDias[2] = botaoT;
        alarmeDias[3] = botaoQ;
        alarmeDias[4] = botaoQui;
        alarmeDias[5] = botaoSe;
        alarmeDias[6] = botaoSab;
        soneca = botaoSoneca;
        nomeDoAlarme = document.getElementById("nomeAlarme").value;

        alarmeNotas = document.getElementById("notasDoAlarmeBox").value;
        feriado = botaoFeriado;

        var novoAlarme = new Array;
        novoAlarme = salvar
        if (alarmeSelecao == 0) {
            primeiro++;
            novoAlarme[primeiro] = criarAlarme(alarmeHoras, alarmeMinutos, alarmeDias, nomeDoAlarme, alarmeNotas, soneca, feriado, botaoSoneca,);

            novoAlarme[0] = primeiro;
        }
        else {
            novoAlarme[primeiro] = criarAlarme(alarmeHoras, alarmeMinutos, alarmeDias, nomeDoAlarme, alarmeNotas, soneca, feriado, botaoSoneca,);
        }
        localStorage.setItem(pegar, JSON.stringify(novoAlarme));

        alert("alarme salvo com sucesso!");
        window.location.assign("telaAlarmes.html")




    }

    function criarAlarme(chave1, chave2, chave3, chave4, chave5, chave6, chave7, chave8, chave9) {
        let newAlarme = {
            "horas": chave1,
            "minutos": chave2,
            "dias": chave3,
            "nome": chave4,
            "notas": chave5,

            "soneca": chave7,
            "feriado": chave8,
            "botaoSoneca": chave9,

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
