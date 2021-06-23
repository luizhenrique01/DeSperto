var pastaNumero=0;
pastaNumero=localStorage.getItem("pastaNumero");

onload =()=>{


    let newAlarme = {
        "horas": 0,
        "minutos": 0,
        "dias": 0,
        "nome": 0,
        "notas": 0,
        "anotacoes": 0,
        "soneca": 0,
        "feriado?": 0,
        "pasta":0,
        "som":0
    }
   

document.getElementById('pastaSalvar').onclick = function (){
    alert("Pasta Salva com Sucesso");
    newAlarme.pasta=document.getElementById('nomePasta').value;
     pastaNumero++;
    var pasta=new Array;
    var pastaNome="A"+pastaNumero;
    pasta[0]=0

    localStorage.setItem(pastaNumero, JSON.stringify(newAlarme));
    localStorage.setItem("pastaNumero",pastaNumero);
    localStorage.setItem(pastaNome,JSON.stringify(pasta));
     window.location.assign( "telaInterna.html");
}
}