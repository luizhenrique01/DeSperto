var pastaNumero=0;
pastaNumero=localStorage.getItem("pastaNumero");

onload =()=>{

    
    
    let newAlarme 
    
   

document.getElementById('pastaSalvar').onclick = function (){
    alert("Pasta Salva com Sucesso");
    newAlarme=document.getElementById('nomePasta').value;
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