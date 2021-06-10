var contador = 0;
var botaoD = 1;
var botaoS = 1;
var botaoT = 1;
var botaoQ = 1;
var botaoQui = 1;
var botaoSe = 1;
var botaoSab = 1;
var botaoSoneca = 1;
var botaoFeriado = 0;



onload = () => {
    document.querySelector('#botaosalvar').onclick = function () {
        contador = localStorage.getItem("numeroAlarme");
        alert("alarme salvo com sucesso!");
        let alarmeHoras = 0;
        let alarmeMinutos = 0;
        let alarmeDias = new Array();
        alarmeDias[0] = botaoD;
        alarmeDias[1] = botaoS;
        alarmeDias[2] = botaoT;
        alarmeDias[3] = botaoQ;
        alarmeDias[4] = botaoQui;
        alarmeDias[5] = botaoSe;
        alarmeDias[6] = botaoSab;
        let soneca = document.getElementById("soneca").value;
        let nomeDoAlarme = document.getElementById("nomeAlarme").value;

        let alarmeNotas = document.getElementById("notasDoAlarmeBox").value;
        let feriado = botaoFeriado;
        let anotacoesAlarme = "nada";
        if (contador == 15) {
            alert('Limite de alarme alcançado');
        }

        else {
            var novoAlarme = criarAlarme(alarmeHoras, alarmeMinutos, alarmeDias, nomeDoAlarme, alarmeNotas, anotacoesAlarme, soneca, feriado);
            contador++;
        }
        localStorage.setItem(contador, JSON.stringify(novoAlarme));
        localStorage.setItem("numeroAlarme", contador);





    }

    function criarAlarme(chave1, chave2, chave3, chave4, chave5, chave6, chave7, chave8) {
        let newAlarme = {
            "horas": chave1,
            "minutos": chave2,
            "dias": chave3,
            "nome": chave4,
            "notas": chave5,
            "anotacoes": chave6,
            "soneca": chave7,
            "feriado?": chave8,
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
            document.getElementById("botaoD").style.background = "#2B5C7C";
            botaoD = 1;
        }
        else {
            document.getElementById("botaoD").style.background = "#C30000";
            botaoD = 0;
        }

    }


    document.getElementById("botaoS").onclick = function () {
        if (botaoS == 0) {
            document.getElementById("botaoS").style.background = "#2B5C7C";
            botaoS = 1;
        }
        else {
            document.getElementById("botaoS").style.background = "#C30000";
            botaoS = 0;
        }

    }

    document.getElementById("botaoT").onclick = function () {
        if (botaoT == 0) {
            document.getElementById("botaoT").style.background = "#2B5C7C";
            botaoT = 1;
        }
        else {
            document.getElementById("botaoT").style.background = "#C30000";
            botaoT = 0;
        }

    }

    document.getElementById("botaoT").onclick = function () {
        if (botaoT == 0) {
            document.getElementById("botaoT").style.background = "#2B5C7C";
            botaoT = 1;
        }
        else {
            document.getElementById("botaoT").style.background = "#C30000";
            botaoT = 0;
        }

    }

    document.getElementById("botaoQ").onclick = function () {
        if (botaoQ == 0) {
            document.getElementById("botaoQ").style.background = "#2B5C7C";
            botaoQ = 1;
        }
        else {
            document.getElementById("botaoQ").style.background = "#C30000";
            botaoQ = 0;
        }

    }
    document.getElementById("botaoQui").onclick = function () {
        if (botaoQui == 0) {
            document.getElementById("botaoQui").style.background = "#2B5C7C";
            botaoQui = 1;
        }
        else {
            document.getElementById("botaoQui").style.background = "#C30000";
            botaoQui = 0;
        }

    }
    document.getElementById("botaoSe").onclick = function () {
        if (botaoSe == 0) {
            document.getElementById("botaoSe").style.background = "#2B5C7C";
            botaoSe = 1;
        }
        else {
            document.getElementById("botaoSe").style.background = "#C30000";
            botaoSe = 0;
        }

    }
    document.getElementById("botaoSab").onclick = function () {
        if (botaoSab == 0) {
            document.getElementById("botaoSab").style.background = "#2B5C7C";
            botaoSab = 1;

        }
        else {
            document.getElementById("botaoSab").style.background = "#C30000";
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