
function click1(){
    
    localStorage.setItem("alarmeSelecao",1);
      window.location.assign("alarme.html")
}
function click2(){
    localStorage.setItem("alarmeSelecao",2);
      window.location.assign("alarme.html")
      
}
function click3(){
    localStorage.setItem("alarmeSelecao",3);
      window.location.assign("alarme.html")
      
}
function click4(){
    localStorage.setItem("alarmeSelecao",4);
      window.location.assign("alarme.html")
      
}
function click5(){
    localStorage.setItem("alarmeSelecao",5);
      window.location.assign("alarme.html")
}
onload=()=>{
    
    document.getElementById('novoAlarme').onclick=function(){
        localStorage.setItem("alarmeSelecao",0);
          window.location.assign("alarme.html")
    }
  
    document.getElementById('voltar').onclick=function(){
        
        window.location.assign("telaInterna.html")
        
    }
    
    

    var pastaAtual=localStorage.getItem("pastaAtual");
    var abrirPasta=new Array;
    
    document.getElementById('nomePastaPlace').innerHTML=localStorage.getItem(pastaAtual)
    switch(pastaAtual){
        case "1":
            abrirPasta=JSON.parse(localStorage.getItem("A1"));
            
            break;
            
            case "2":
                abrirPasta=JSON.parse(localStorage.getItem("A2"));
                break;
                case "3":
                    abrirPasta=JSON.parse(localStorage.getItem("A3"));
                    break;
                    case "4":
                        abrirPasta=JSON.parse(localStorage.getItem("A4"));
                        break;
                        case "5":
                            abrirPasta=JSON.parse(localStorage.getItem("A5"));
                            break;

    }
    let pastaNumero=localStorage.getItem("pastaNumero");

    if (abrirPasta[0]==1){ 
      
        let alarmeData1=abrirPasta
        let div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes')
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
       
       h4.onclick = new Function('click1()');
        h4.innerHTML=alarmeData1[1].nome;
       
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas;
        h5.setAttribute('id','5h');
       
        let div4 = document.createElement("div4");
        div4.setAttribute('class','row alarme');
        div4.setAttribute('id','4div');
        let label = document.createElement("label");
        label.setAttribute('class','switch');
        label.setAttribute('id','label1');
        let input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id','input');
        let span = document.createElement("span");
        span.setAttribute('class','slider round');
        span.setAttribute('id','span1');
        
        
            document.getElementById("allAlarmes").append(div0);
            document.getElementById("localDosAlarmes").append(div1);
            document.getElementById("1div").append(div2);
            document.getElementById("2div").append(h4);
            document.getElementById("2div").append(p);
            document.getElementById("1div").append(div3);
            document.getElementById("3div").append(h5);
            document.getElementById("3div").append(div4);
            document.getElementById("4div").append(label);
            document.getElementById("label1").append(input);
            document.getElementById("label1").append(span);




        
    
    }
    else if (abrirPasta[0]==2){ 
        let alarmeData1=abrirPasta
        let div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes')
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[1].nome;
        h4.setAttribute('id','click1');
        h4.onclick = new Function('click1()');
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas
        h5.setAttribute('id','5h');
       
        let div4 = document.createElement("div4");
        div4.setAttribute('class','row alarme');
        div4.setAttribute('id','4div');
        let label = document.createElement("label");
        label.setAttribute('class','switch');
        label.setAttribute('id','label1');
        let input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id','input');
        let span = document.createElement("span");
        span.setAttribute('class','slider round');
        span.setAttribute('id','span1');
        
        
        document.getElementById("allAlarmes").append(div0);
            document.getElementById("localDosAlarmes").append(div1);
            document.getElementById("1div").append(div2);
            document.getElementById("2div").append(h4);
            document.getElementById("2div").append(p);
            document.getElementById("1div").append(div3);
            document.getElementById("3div").append(h5);
            document.getElementById("3div").append(div4);
            document.getElementById("4div").append(label);
            document.getElementById("label1").append(input);
            document.getElementById("label1").append(span);

            div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes2')
         div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div2');
         div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div2');
         h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[2].nome;
        h4.setAttribute('id','click2');
        h4.onclick = new Function('click2()');
         p = document.createElement("p");
        p.innerHTML=alarmeData1[2].notas;
        p.setAttribute('id','1p2');
         div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div2');
         h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[2].horas
        h5.setAttribute('id','5h2');
       
         div4 = document.createElement("div4");
        div4.setAttribute('class','row alarme');
        div4.setAttribute('id','4div2');
         label = document.createElement("label");
        label.setAttribute('class','switch');
        label.setAttribute('id','label12');
         input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id','input2');
         span = document.createElement('span');
        span.setAttribute('class','slider round');
        span.setAttribute('id','span12');
        
        
        document.getElementById("allAlarmes").append(div0);
            document.getElementById("localDosAlarmes2").append(div1);
            document.getElementById("1div2").append(div2);
            document.getElementById("2div2").append(h4);
            document.getElementById("2div2").append(p);
            document.getElementById("1div2").append(div3);
            document.getElementById("3div2").append(h5);
            document.getElementById("3div2").append(div4);
            document.getElementById("4div2").append(label);
            document.getElementById("label12").append(input);
            document.getElementById("label12").append(span);
        
        
    
    }
    else if (abrirPasta[0]==3){ 
        let div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes')
        let alarmeData1=abrirPasta
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[1].nome;
        h4.setAttribute('id','click1');
        h4.onclick = new Function('click1()');
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas
        h5.setAttribute('id','5h');
       
        let div4 = document.createElement("div4");
        div4.setAttribute('class','row alarme');
        div4.setAttribute('id','4div');
        let label = document.createElement("label");
        label.setAttribute('class','switch');
        label.setAttribute('id','label1');
        let input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id','input');
        let span = document.createElement("span");
        span.setAttribute('class','slider round');
        span.setAttribute('id','span1');
        
        document.getElementById("allAlarmes").append(div0);
        
            document.getElementById("localDosAlarmes").append(div1);
            document.getElementById("1div").append(div2);
            document.getElementById("2div").append(h4);
            document.getElementById("2div").append(p);
            document.getElementById("1div").append(div3);
            document.getElementById("3div").append(h5);
            document.getElementById("3div").append(div4);
            document.getElementById("4div").append(label);
            document.getElementById("label1").append(input);
            document.getElementById("label1").append(span);

            div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes2')
         div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div2');
         div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div2');
         h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[2].nome;
        h4.setAttribute('id','click2');
        h4.onclick = new Function('click2()');
         p = document.createElement("p");
        p.innerHTML=alarmeData1[2].notas;
        p.setAttribute('id','1p2');
         div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div2');
         h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[2].horas
        h5.setAttribute('id','5h2');
       
         div4 = document.createElement("div4");
        div4.setAttribute('class','row alarme');
        div4.setAttribute('id','4div2');
         label = document.createElement("label");
        label.setAttribute('class','switch');
        label.setAttribute('id','label12');
         input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id','input2');
         span = document.createElement("span");
        span.setAttribute('class','slider round');
        span.setAttribute('id','span12');
        
        
        document.getElementById("allAlarmes").append(div0);
            document.getElementById("localDosAlarmes2").append(div1);
            document.getElementById("1div2").append(div2);
            document.getElementById("2div2").append(h4);
            document.getElementById("2div2").append(p);
            document.getElementById("1div2").append(div3);
            document.getElementById("3div2").append(h5);
            document.getElementById("3div2").append(div4);
            document.getElementById("4div2").append(label);
            document.getElementById("label12").append(input);
            document.getElementById("label12").append(span);
            div0=document.createElement("div0")
            div0.setAttribute('class','container')
            div0.setAttribute('id','localDosAlarmes3')
            div1 = document.createElement("div");
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div3');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div3');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[3].nome;
            h4.setAttribute('id','click3');
            h4.onclick = new Function('click3()');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[3].notas;
            p.setAttribute('id','1p3');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div3');
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[3].horas
            h5.setAttribute('id','5h3');
           
             div4 = document.createElement("div4");
            div4.setAttribute('class','row alarme');
            div4.setAttribute('id','4div3');
             label = document.createElement("label");
            label.setAttribute('class','switch');
            label.setAttribute('id','label13');
             input = document.createElement("input");
            input.setAttribute('type','checkbox');
            input.setAttribute('id','input3');
             span = document.createElement("span");
            span.setAttribute('class','slider round');
            span.setAttribute('id','span13');
            
            
            document.getElementById("allAlarmes").append(div0);
                document.getElementById("localDosAlarmes3").append(div1);
                document.getElementById("1div3").append(div2);
                document.getElementById("2div3").append(h4);
                document.getElementById("2div3").append(p);
                document.getElementById("1div3").append(div3);
                document.getElementById("3div3").append(h5);
                document.getElementById("3div3").append(div4);
                document.getElementById("4div3").append(label);
                document.getElementById("label13").append(input);
                document.getElementById("label13").append(span);
        
        
    
    }
    else if (abrirPasta[0]==4){ 
        let div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes')
        let alarmeData1=abrirPasta
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[1].nome;
        h4.setAttribute('id','click1');
        h4.onclick = new Function('click1()');
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas
        h5.setAttribute('id','5h');
       
        let div4 = document.createElement("div4");
        div4.setAttribute('class','row alarme');
        div4.setAttribute('id','4div');
        let label = document.createElement("label");
        label.setAttribute('class','switch');
        label.setAttribute('id','label1');
        let input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id','input');
        let span = document.createElement("span");
        span.setAttribute('class','slider round');
        span.setAttribute('id','span1');
        
        
        document.getElementById("allAlarmes").append(div0);
            document.getElementById("localDosAlarmes").append(div1);
            document.getElementById("1div").append(div2);
            document.getElementById("2div").append(h4);
            document.getElementById("2div").append(p);
            document.getElementById("1div").append(div3);
            document.getElementById("3div").append(h5);
            document.getElementById("3div").append(div4);
            document.getElementById("4div").append(label);
            document.getElementById("label1").append(input);
            document.getElementById("label1").append(span);

            div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes')
         div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
         div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
         h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[2].nome;
        h4.setAttribute('id','click2');
        h4.onclick = new Function('click2()');
         p = document.createElement("p");
        p.innerHTML=alarmeData1[2].notas;
        p.setAttribute('id','1p');
         div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
         h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[2].horas
        h5.setAttribute('id','5h');
       
         div4 = document.createElement("div4");
        div4.setAttribute('class','row alarme');
        div4.setAttribute('id','4div');
         label = document.createElement("label");
        label.setAttribute('class','switch');
        label.setAttribute('id','label1');
         input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id','input');
         span = document.createElement("span");
        span.setAttribute('class','slider round');
        span.setAttribute('id','span1');
        
        
        document.getElementById("allAlarmes").append(div0);
            document.getElementById("localDosAlarmes").append(div1);
            document.getElementById("1div").append(div2);
            document.getElementById("2div").append(h4);
            document.getElementById("2div").append(p);
            document.getElementById("1div").append(div3);
            document.getElementById("3div").append(h5);
            document.getElementById("3div").append(div4);
            document.getElementById("4div").append(label);
            document.getElementById("label1").append(input);
            document.getElementById("label1").append(span);
            div0=document.createElement("div0")
            div0.setAttribute('class','container')
            div0.setAttribute('id','localDosAlarmes')
            div1 = document.createElement("div");
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[3].nome;
            h4.setAttribute('id','click3');
            h4.onclick = new Function('click3()');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[3].notas;
            p.setAttribute('id','1p');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div');
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[3].horas
            h5.setAttribute('id','5h');
           
             div4 = document.createElement("div4");
            div4.setAttribute('class','row alarme');
            div4.setAttribute('id','4div');
             label = document.createElement("label");
            label.setAttribute('class','switch');
            label.setAttribute('id','label1');
             input = document.createElement("input");
            input.setAttribute('type','checkbox');
            input.setAttribute('id','input');
             span = document.createElement("span");
            span.setAttribute('class','slider round');
            span.setAttribute('id','span1');
            
            
            document.getElementById("allAlarmes").append(div0);
                document.getElementById("localDosAlarmes").append(div1);
                document.getElementById("1div").append(div2);
                document.getElementById("2div").append(h4);
                document.getElementById("2div").append(p);
                document.getElementById("1div").append(div3);
                document.getElementById("3div").append(h5);
                document.getElementById("3div").append(div4);
                document.getElementById("4div").append(label);
                document.getElementById("label1").append(input);
                document.getElementById("label1").append(span);
                div1 = document.createElement("div");
                div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes')
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[4].nome;
            h4.setAttribute('id','click4');
            h4.onclick = new Function('click4()');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[4].notas;
            p.setAttribute('id','1p');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div');
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[4].horas
            h5.setAttribute('id','5h');
           
             div4 = document.createElement("div4");
            div4.setAttribute('class','row alarme');
            div4.setAttribute('id','4div');
             label = document.createElement("label");
            label.setAttribute('class','switch');
            label.setAttribute('id','label1');
             input = document.createElement("input");
            input.setAttribute('type','checkbox');
            input.setAttribute('id','input');
             span = document.createElement("span");
            span.setAttribute('class','slider round');
            span.setAttribute('id','span1');
            
            
            document.getElementById("allAlarmes").append(div0);
                document.getElementById("localDosAlarmes").append(div1);
                document.getElementById("1div").append(div2);
                document.getElementById("2div").append(h4);
                document.getElementById("2div").append(p);
                document.getElementById("1div").append(div3);
                document.getElementById("3div").append(h5);
                document.getElementById("3div").append(div4);
                document.getElementById("4div").append(label);
                document.getElementById("label1").append(input);
                document.getElementById("label1").append(span);
        
        
    
    }
    else if (abrirPasta[0]==5){ 
        let div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes')
        let alarmeData1=abrirPasta
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[1].nome;
        h4.setAttribute('id','click1');
        h4.onclick = new Function('click1()');
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas
        h5.setAttribute('id','5h');
       
        let div4 = document.createElement("div4");
        div4.setAttribute('class','row alarme');
        div4.setAttribute('id','4div');
        let label = document.createElement("label");
        label.setAttribute('class','switch');
        label.setAttribute('id','label1');
        let input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id','input');
        let span = document.createElement("span");
        span.setAttribute('class','slider round');
        span.setAttribute('id','span1');
        
        
        document.getElementById("allAlarmes").append(div0);
            document.getElementById("localDosAlarmes").append(div1);
            document.getElementById("1div").append(div2);
            document.getElementById("2div").append(h4);
            document.getElementById("2div").append(p);
            document.getElementById("1div").append(div3);
            document.getElementById("3div").append(h5);
            document.getElementById("3div").append(div4);
            document.getElementById("4div").append(label);
            document.getElementById("label1").append(input);
            document.getElementById("label1").append(span);

            div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes')
         div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
         div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
         h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[2].nome;
        h4.setAttribute('id','click2');
        h4.onclick = new Function('click2()');
         p = document.createElement("p");
        p.innerHTML=alarmeData1[2].notas;
        p.setAttribute('id','1p');
         div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
         h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[2].horas
        h5.setAttribute('id','5h');
       
         div4 = document.createElement("div4");
        div4.setAttribute('class','row alarme');
        div4.setAttribute('id','4div');
         label = document.createElement("label");
        label.setAttribute('class','switch');
        label.setAttribute('id','label1');
         input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id','input');
         span = document.createElement("span");
        span.setAttribute('class','slider round');
        span.setAttribute('id','span1');
        
        
        document.getElementById("allAlarmes").append(div0);
            document.getElementById("localDosAlarmes").append(div1);
            document.getElementById("1div").append(div2);
            document.getElementById("2div").append(h4);
            document.getElementById("2div").append(p);
            document.getElementById("1div").append(div3);
            document.getElementById("3div").append(h5);
            document.getElementById("3div").append(div4);
            document.getElementById("4div").append(label);
            document.getElementById("label1").append(input);
            document.getElementById("label1").append(span);
            div0=document.createElement("div0")
            div0.setAttribute('class','container')
            div0.setAttribute('id','localDosAlarmes')
            div1 = document.createElement("div");
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[3].nome;
            h4.setAttribute('id','click3');
            h4.onclick = new Function('click3()');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[3].notas;
            p.setAttribute('id','1p');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div');
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[3].horas
            h5.setAttribute('id','5h');
           
             div4 = document.createElement("div4");
            div4.setAttribute('class','row alarme');
            div4.setAttribute('id','4div');
             label = document.createElement("label");
            label.setAttribute('class','switch');
            label.setAttribute('id','label1');
             input = document.createElement("input");
            input.setAttribute('type','checkbox');
            input.setAttribute('id','input');
             span = document.createElement("span");
            span.setAttribute('class','slider round');
            span.setAttribute('id','span1');
            
            
            document.getElementById("allAlarmes").append(div0);
                document.getElementById("localDosAlarmes").append(div1);
                document.getElementById("1div").append(div2);
                document.getElementById("2div").append(h4);
                document.getElementById("2div").append(p);
                document.getElementById("1div").append(div3);
                document.getElementById("3div").append(h5);
                document.getElementById("3div").append(div4);
                document.getElementById("4div").append(label);
                document.getElementById("label1").append(input);
                document.getElementById("label1").append(span);
                div1 = document.createElement("div");
                div0=document.createElement("div0")
        div0.setAttribute('class','container')
        div0.setAttribute('id','localDosAlarmes')
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[4].nome;
            h4.setAttribute('id','click4');
            h4.onclick = new Function('click4()');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[4].notas;
            p.setAttribute('id','1p');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div');
            
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[4].horas
            h5.setAttribute('id','5h');
           
             div4 = document.createElement("div4");
            div4.setAttribute('class','row alarme');
            div4.setAttribute('id','4div');
             label = document.createElement("label");
            label.setAttribute('class','switch');
            label.setAttribute('id','label1');
             input = document.createElement("input");
            input.setAttribute('type','checkbox');
            input.setAttribute('id','input');
             span = document.createElement("span");
            span.setAttribute('class','slider round');
            span.setAttribute('id','span1');
            
            
            document.getElementById("allAlarmes").append(div0);
                document.getElementById("localDosAlarmes").append(div1);
                document.getElementById("1div").append(div2);
                document.getElementById("2div").append(h4);
                document.getElementById("2div").append(p);
                document.getElementById("1div").append(div3);
                document.getElementById("3div").append(h5);
                document.getElementById("3div").append(div4);
                document.getElementById("4div").append(label);
                document.getElementById("label1").append(input);
                document.getElementById("label1").append(span);
                div0=document.createElement("div0")
                div0.setAttribute('class','container')
                div0.setAttribute('id','localDosAlarmes')
                div1.setAttribute('class','row alarme');
                div1.setAttribute('id','1div');
                 div2 = document.createElement("div");
                div2.setAttribute('class','col-8');
                div2.setAttribute('id','2div');
                 h4 = document.createElement("h4");
                h4.innerHTML=alarmeData1[5].nome;
                h4.setAttribute('id','click5');
                h4.onclick = new Function('click5()');
                 p = document.createElement("p");
                p.innerHTML=alarmeData1[5].notas;
                p.setAttribute('id','1p');
                 div3 = document.createElement("div");
                div3.setAttribute('class','col-4');
                div3.setAttribute('id','3div');
                 h5 = document.createElement("h5");
                h5.innerHTML=alarmeData1[5].horas
                h5.setAttribute('id','5h');

               
                 div4 = document.createElement("div4");
                div4.setAttribute('class','row alarme');
                div4.setAttribute('id','4div');
                 label = document.createElement("label");
                label.setAttribute('class','switch');
                label.setAttribute('id','label1');
                 input = document.createElement("input");
                input.setAttribute('type','checkbox');
                input.setAttribute('id','input');
                 span = document.createElement("span");
                span.setAttribute('class','slider round');
                span.setAttribute('id','span1');
                
                
                document.getElementById("allAlarmes").append(div0);
                    document.getElementById("localDosAlarmes").append(div1);
                    document.getElementById("1div").append(div2);
                    document.getElementById("2div").append(h4);
                    document.getElementById("2div").append(p);
                    document.getElementById("1div").append(div3);
                    document.getElementById("3div").append(h5);
                    document.getElementById("3div").append(div4);
                    document.getElementById("4div").append(label);
                    document.getElementById("label1").append(input);
                    document.getElementById("label1").append(span);
    
    }
    
    
    
    var alarmeQt=abrirPasta[0];
    
}