function click1(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","1")
    
}
function click2(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","2")

}
function click3(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","3")
}
function click4(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","4")
}
function click5(){
    window.location.assign("telaAlarmes.html");
    localStorage.setItem("pastaAtual","5")
}
onload = () =>{
   
    let pastaNumero=localStorage.getItem("pastaNumero");
 
    if (pastaNumero==1){ 
        let h3 = document.createElement("h3");
        h3.setAttribute('id','1pasta');
        h3.onclick = new Function('click1()');
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        let nome=alarmeData1;
        h3.innerHTML = nome;
        
            document.getElementById("pasta1").append(h3);
        
    
    }
    else if(pastaNumero==2){
      let h3 = document.createElement("h3");
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        h3.setAttribute('id','1pasta');
        h3.onclick = new Function('click1()');

        let nome=alarmeData1;
        h3.innerHTML = nome;
            
            document.getElementById("pasta1").append(h3);
        
        h3 = document.createElement("h3");
        let alarmeData2=JSON.parse(localStorage.getItem('2'));
        nome=alarmeData2;
        h3.innerHTML = nome;
        h3.setAttribute('id','2pasta');
        h3.onclick = new Function('click2()');
            
            document.getElementById("pasta2").append(h3);
        
    }
    else if(pastaNumero==3){
        let h3 = document.createElement("h3");
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        h3.setAttribute('id','1pasta');
        h3.onclick = new Function('click1()');

        let nome=alarmeData1;
        h3.innerHTML = nome;
            
            document.getElementById("pasta1").append(h3);
            
        
        h3 = document.createElement("h3");
        let alarmeData2=JSON.parse(localStorage.getItem('2'));
        nome=alarmeData2;
        h3.innerHTML = nome;
        h3.setAttribute('id','2pasta');
        h3.onclick = new Function('click2()');
        document.getElementById("pasta2").append(h3);
            
           
            h3 = document.createElement("h3");
            let alarmeData3=JSON.parse(localStorage.getItem('3'));
            nome=alarmeData3;
            h3.innerHTML = nome;
            h3.setAttribute('id','3pasta');
            h3.onclick = new Function('click3()');
                
                document.getElementById("pasta3").append(h3);
            
                    
        
    }
    else if(pastaNumero==4){
        let h3 = document.createElement("h3");
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        h3.setAttribute('id','1pasta');
        h3.onclick = new Function('click1()');

        let nome=alarmeData1;
        h3.innerHTML = nome;
            
            document.getElementById("pasta1").append(h3);
        
        h3 = document.createElement("h3");
        let alarmeData2=JSON.parse(localStorage.getItem('2'));
        nome=alarmeData2;
        h3.innerHTML = nome;
        h3.setAttribute('id','2pasta');
        h3.onclick = new Function('click2()');
            
            document.getElementById("pasta2").append(h3);
            h3 = document.createElement("h3");
            let alarmeData3=JSON.parse(localStorage.getItem('3'));
            nome=alarmeData3;
            h3.innerHTML = nome;
            h3.setAttribute('id','3pasta');
            h3.onclick = new Function('click3()');
                
                document.getElementById("pasta3").append(h3);
                h3 = document.createElement("h3");
                let alarmeData4=JSON.parse(localStorage.getItem('4'));
                nome=alarmeData4;
                h3.innerHTML = nome;
                h3.setAttribute('id','4pasta');
                h3.onclick = new Function('click4()');
                    
                    document.getElementById("pasta4").append(h3);            
    }
    else if(pastaNumero==5){
        let h3 = document.createElement("h3");
        let alarmeData1=JSON.parse(localStorage.getItem('1'));
        h3.setAttribute('id','1pasta');
        h3.onclick = new Function('click1()');

        let nome=alarmeData1;
        h3.innerHTML = nome;
            
            document.getElementById("pasta1").append(h3);
        
        h3 = document.createElement("h3");
        let alarmeData2=JSON.parse(localStorage.getItem('2'));
        nome=alarmeData2;
        h3.innerHTML = nome;
        h3.setAttribute('id','2pasta');
        h3.onclick = new Function('click2()');
            
            document.getElementById("pasta2").append(h3);
            h3 = document.createElement("h3");
            let alarmeData3=JSON.parse(localStorage.getItem('3'));
            nome=alarmeData3;
            h3.innerHTML = nome;
            h3.setAttribute('id','3pasta');
            h3.onclick = new Function('click3()');
                
                document.getElementById("pasta3").append(h3);
                h3 = document.createElement("h3");
                let alarmeData4=JSON.parse(localStorage.getItem('4'));
                nome=alarmeData4;
                h3.innerHTML = nome;
                h3.setAttribute('id','4pasta');
                h3.onclick = new Function('click4()');
                    
                    document.getElementById("pasta4").append(h3);
                    h3 = document.createElement("h3");
                    let alarmeData5=JSON.parse(localStorage.getItem('5'));
                    nome=alarmeData5;
                    h3.innerHTML = nome;
                    h3.setAttribute('id','5pasta');
                    h3.onclick = new Function('click5()');
                        
                        document.getElementById("pasta5").append(h3);
    
    }

    
    
    

}