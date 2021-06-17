onload = () =>{
   
    let alarmeNumero=localStorage.getItem("numeroAlarme");
  
    if (alarmeNumero==1){ 
        let btn = document.createElement("button");
        var alarmeData1=JSON.parse(localStorage.getItem('1'));
        var nome=alarmeData1.nome;
        btn.innerHTML = nome;
            
            document.getElementById("pasta").prepend(btn);
        
    
    }
    else if(alarmeNumero==2){
      btn = document.createElement("button");
        var alarmeData1=JSON.parse(localStorage.getItem('1'));
        var nome=alarmeData1.nome;
        btn.innerHTML = nome;
            
            document.getElementById("pasta").prepend(btn);
        
        btn = document.createElement("button");
        var alarmeData2=JSON.parse(localStorage.getItem('2'));
        var nome=alarmeData2.nome;
        btn.innerHTML = nome;
            
            document.getElementById("pasta").prepend(btn);
        
    }
    else if(alarmeNumero==3){
       btn = document.createElement("button");
        var alarmeData1=JSON.parse(localStorage.getItem('1'));
        var nome=alarmeData1.nome;
        btn.innerHTML = nome;
            
            document.getElementById("pasta").prepend(btn);
          btn = document.createElement("button");
            var alarmeData2=JSON.parse(localStorage.getItem('2'));
            var nome=alarmeData2.nome;
            btn.innerHTML = nome;
                
                document.getElementById("pasta").prepend(btn);
                btn = document.createElement("button");
                var alarmeData3=JSON.parse(localStorage.getItem('3'));
                var nome=alarmeData3.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
                    
        
    }
    else if(alarmeNumero==4){
        btn = document.createElement("button");
        var alarmeData1=JSON.parse(localStorage.getItem('1'));
        var nome=alarmeData1.nome;
        btn.innerHTML = nome;
            
            document.getElementById("pasta").prepend(btn);
            btn = document.createElement("button");
            var alarmeData2=JSON.parse(localStorage.getItem('2'));
            var nome=alarmeData2.nome;
            btn.innerHTML = nome;
                
                document.getElementById("pasta").prepend(btn);
                btn = document.createElement("button");
                var alarmeData3=JSON.parse(localStorage.getItem('3'));
                var nome=alarmeData3.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                 btn = document.createElement("button");
                var alarmeData4=JSON.parse(localStorage.getItem('4'));
                var nome=alarmeData4.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
    }
    else if(alarmeNumero==5){
        btn = document.createElement("button");
        var alarmeData1=JSON.parse(localStorage.getItem('1'));
        var nome=alarmeData1.nome;
        btn.innerHTML = nome;
            
            document.getElementById("pasta").prepend(btn);
            btn = document.createElement("button");
            var alarmeData2=JSON.parse(localStorage.getItem('2'));
            var nome=alarmeData2.nome;
            btn.innerHTML = nome;
                
                document.getElementById("pasta").prepend(btn);
                btn = document.createElement("button");
                var alarmeData3=JSON.parse(localStorage.getItem('3'));
                var nome=alarmeData3.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                 btn = document.createElement("button");
                var alarmeData4=JSON.parse(localStorage.getItem('4'));
                var nome=alarmeData4.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                 btn = document.createElement("button");
                var alarmeData5=JSON.parse(localStorage.getItem('5'));
                var nome=alarmeData5.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
    
    }
    else if(alarmeNumero==6){
        btn = document.createElement("button");
        var alarmeData1=JSON.parse(localStorage.getItem('1'));
        var nome=alarmeData1.nome;
        btn.innerHTML = nome;
            
            document.getElementById("pasta").prepend(btn);
            btn = document.createElement("button");
            var alarmeData2=JSON.parse(localStorage.getItem('2'));
            var nome=alarmeData2.nome;
            btn.innerHTML = nome;
                
                document.getElementById("pasta").prepend(btn);
                btn = document.createElement("button");
                var alarmeData3=JSON.parse(localStorage.getItem('3'));
                var nome=alarmeData3.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                 btn = document.createElement("button");
                var alarmeData4=JSON.parse(localStorage.getItem('4'));
                var nome=alarmeData4.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                 btn = document.createElement("button");
                var alarmeData5=JSON.parse(localStorage.getItem('5'));
                var nome=alarmeData5.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                    document.getElementById("pasta").prepend(btn);
                 btn = document.createElement("button");
                var alarmeData6=JSON.parse(localStorage.getItem('6'));
                var nome=alarmeData6.nome;
                btn.innerHTML = nome;
                    
                    document.getElementById("pasta").prepend(btn);
    
    }

}