onload = () =>{
   
    let pastaNumero=localStorage.getItem("pastaNumero");
 
    if (pastaNumero==1){ 
        let h3 = document.createElement("h3");
        h3.setAttribute('id','1pasta');
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        let nome=alarmeData1.pasta;
        h3.innerHTML = nome;
        
            document.getElementById("pasta1").append(h3);
        
    
    }
    else if(pastaNumero==2){
      let h3 = document.createElement("h3");
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        h3.setAttribute('id','1pasta');
        let nome=alarmeData1.pasta;
        h3.innerHTML = nome;
            
            document.getElementById("pasta1").append(h3);
        
        h3 = document.createElement("h3");
        let alarmeData2=JSON.parse(localStorage.getItem('2'));
        nome=alarmeData2.pasta;
        h3.innerHTML = nome;
        h3.setAttribute('id','2pasta');
            
            document.getElementById("pasta2").append(h3);
        
    }
    else if(pastaNumero==3){
        let h3 = document.createElement("h3");
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        h3.setAttribute('id','1pasta');
        let nome=alarmeData1.pasta;
        h3.innerHTML = nome;
            
            document.getElementById("pasta1").append(h3);
            
        
        h3 = document.createElement("h3");
        let alarmeData2=JSON.parse(localStorage.getItem('2'));
        nome=alarmeData2.pasta;
        h3.innerHTML = nome;
        h3.setAttribute('id','2pasta');
        document.getElementById("pasta2").append(h3);
            
           
            h3 = document.createElement("h3");
            let alarmeData3=JSON.parse(localStorage.getItem('3'));
            nome=alarmeData3.pasta;
            h3.innerHTML = nome;
            h3.setAttribute('id','3pasta');
                
                document.getElementById("pasta3").append(h3);
            
                    
        
    }
    else if(pastaNumero==4){
        let h3 = document.createElement("h3");
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        h3.setAttribute('id','1pasta');
        let nome=alarmeData1.pasta;
        h3.innerHTML = nome;
            
            document.getElementById("pasta1").append(h3);
        
        h3 = document.createElement("h3");
        let alarmeData2=JSON.parse(localStorage.getItem('2'));
        nome=alarmeData2.pasta;
        h3.innerHTML = nome;
        h3.setAttribute('id','2pasta');
            
            document.getElementById("pasta2").append(h3);
            h3 = document.createElement("h3");
            let alarmeData3=JSON.parse(localStorage.getItem('3'));
            nome=alarmeData3.pasta;
            h3.innerHTML = nome;
            h3.setAttribute('id','3pasta');
                
                document.getElementById("pasta3").append(h3);
                h3 = document.createElement("h3");
                let alarmeData4=JSON.parse(localStorage.getItem('4'));
                nome=alarmeData4.pasta;
                h3.innerHTML = nome;
                h3.setAttribute('id','4pasta');
                    
                    document.getElementById("pasta4").append(h3);
                
                
    }
    else if(pastaNumero==5){
        let h3 = document.createElement("h3");
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        h3.setAttribute('id','1pasta');
        let nome=alarmeData1.pasta;
        h3.innerHTML = nome;
            
            document.getElementById("pasta1").append(h3);
        
        h3 = document.createElement("h3");
        let alarmeData2=JSON.parse(localStorage.getItem('2'));
        nome=alarmeData2.pasta;
        h3.innerHTML = nome;
        h3.setAttribute('id','2pasta');
            
            document.getElementById("pasta2").append(h3);
            h3 = document.createElement("h3");
            let alarmeData3=JSON.parse(localStorage.getItem('3'));
            nome=alarmeData3.pasta;
            h3.innerHTML = nome;
            h3.setAttribute('id','3pasta');
                
                document.getElementById("pasta3").append(h3);
                h3 = document.createElement("h3");
                let alarmeData4=JSON.parse(localStorage.getItem('4'));
                nome=alarmeData4.pasta;
                h3.innerHTML = nome;
                h3.setAttribute('id','4pasta');
                    
                    document.getElementById("pasta4").append(h3);
                    h3 = document.createElement("h3");
                    let alarmeData5=JSON.parse(localStorage.getItem('5'));
                    nome=alarmeData5.pasta;
                    h3.innerHTML = nome;
                    h3.setAttribute('id','5pasta');
                        
                        document.getElementById("pasta5").append(h3);
    
    }

    
    
    
document.getElementById('1pasta').onclick=function(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","1")
    
}
document.getElementById('2pasta').onclick=function(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","2")

}
document.getElementById('3pasta').onclick=function(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","3")
}
document.getElementById('4pasta').onclick=function(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","4")
}
document.getElementById('5pasta').onclick=function(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","5")
}
}