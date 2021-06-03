var contador = 0;
var botaoD = 1;
var botaoS = 1;
var botaoT = 1;
var botaoQ = 1;
var botaoQui = 1;
var botaoSe = 1;
var botaoSab = 1;
onload = () => {
    document.querySelector('#botaosalvar').onclick = function () {
        alert("alarme salvo com sucesso!");
        let alarmeHoras = document.getElementById("horas").value;
        let alarmeMinutos = document.getElementById("minutos").value;
        let alarmeDias = new Array();
        alarmeDias[0] = botaoD;
        alarmeDias[1] = botaoS;
        alarmeDias[2] = botaoT;
        alarmeDias[3] = botaoQ;
        alarmeDias[4] = botaoQui;
        alarmeDias[5] = botaoSe;
        alarmeDias[6] = botaoSab;
        let nomeDoAlarme = document.getElementById("nomeAlarme").value;
        console.log(nomeDoAlarme);
        let alarmeNotas = document.getElementById("notasDoAlarmeBox").value;
        let grupoAlarmes = new Array();
        let anotacoesAlarme=document.getElementById("anotaçoesDoAlarmeBox").value;
        if (contador == 15) {
            alert('Limite de alarme alcançado');
        }

        else {
            grupoAlarmes[contador] = criarAlarme(alarmeHoras, alarmeMinutos, alarmeDias, nomeDoAlarme, alarmeNotas,anotacoesAlarme);
            contador++;
        }


        console.log(grupoAlarmes[contador - 1]);
        console.log(contador);
        console.log(botaoD);
    }

    function criarAlarme(chave1, chave2, chave3, chave4, chave5,chave6) {
        let newAlarme = {
            "horas": chave1,
            "minutos": chave2,
            "dias": chave3,
            "nome": chave4,
            "notas": chave5,
            "anotacoes":chave6
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
    document.getElementById("botaoDomingo").onclick = botaoD = ligarBotao(botaoD);
    document.getElementById("botaoDomingo").onclick = function () {
        if (botaoD == 0) {
            document.getElementById("botaoDomingo").style.background = "#2B5C7C";
            botaoD = 1;
        }
        else {
            document.getElementById("botaoDomingo").style.background = "#C30000";
            botaoD = 0;
        }

    }


    document.getElementById("botaoSegunda").onclick = function () {
        if (botaoS == 0) {
            document.getElementById("botaoSegunda").style.background = "#2B5C7C";
            botaoS = 1;
        }
        else {
            document.getElementById("botaoSegunda").style.background = "#C30000";
            botaoS = 0;
        }

    }

    document.getElementById("botaoTerca").onclick = function () {
        if (botaoT == 0) {
            document.getElementById("botaoTerca").style.background = "#2B5C7C";
            botaoT = 1;
        }
        else {
            document.getElementById("botaoTerca").style.background = "#C30000";
            botaoT = 0;
        }

    }

    document.getElementById("botaoTerca").onclick = function () {
        if (botaoT == 0) {
            document.getElementById("botaoTerca").style.background = "#2B5C7C";
            botaoT = 1;
        }
        else {
            document.getElementById("botaoTerca").style.background = "#C30000";
            botaoT = 0;
        }

    }

    document.getElementById("botaoQuarta").onclick = function () {
        if (botaoQ == 0) {
            document.getElementById("botaoQuarta").style.background = "#2B5C7C";
            botaoQ = 1;
        }
        else {
            document.getElementById("botaoQuarta").style.background = "#C30000";
            botaoQ = 0;
        }

    }
    document.getElementById("botaoQuinta").onclick = function () {
        if (botaoQui == 0) {
            document.getElementById("botaoQuinta").style.background = "#2B5C7C";
            botaoQui = 1;
        }
        else {
            document.getElementById("botaoQuinta").style.background = "#C30000";
            botaoQui = 0;
        }

    }
    document.getElementById("botaoSexta").onclick = function () {
        if (botaoSe == 0) {
            document.getElementById("botaoSexta").style.background = "#2B5C7C";
            botaoSe = 1;
        }
        else {
            document.getElementById("botaoSexta").style.background = "#C30000";
            botaoSe = 0;
        }

    }
    document.getElementById("botaoSabado").onclick = function () {
        if (botaoSab == 0) {
            document.getElementById("botaoSabado").style.background = "#2B5C7C";
            botaoSab = 1;
        }
        else {
            document.getElementById("botaoSabado").style.background = "#C30000";
            botaoSab = 0;
        }

    }





}


