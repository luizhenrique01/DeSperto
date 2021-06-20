onload=()=>{
    document.getElementById('novoAlarme').onclick=function(){
        localStorage.setItem("alarmeSelecao",0);
          window.location.assign("alarme.html")
          
    }
    var pastaAtual=localStorage.getItem("pastaAtual");
    var abrirPasta=new Array;
    
    switch(pastaAtual){
        case "1":
            abrirPasta=JSON.parse(localStorage.getItem("A1"));
            
            break;
            
            case "2":
                abrirPasta=localStorage.getItem("A2");
                break;
                case "3":
                    abrirPasta=localStorage.getItem("A3");
                    break;
                    case "4":
                        abrirPasta=localStorage.getItem("A4");
                        break;
                        case "5":
                            abrirPasta=localStorage.getItem("A5");
                            break;

    }
    let pastaNumero=localStorage.getItem("pastaNumero");

    if (abrirPasta[0]==1){ 
        let alarmeData1=abrirPasta
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[1].nome;
        h4.setAttribute('id','4h');
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas+":"+alarmeData1[1].minutos;
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
    /*else if (abrirPasta[0]==2){ 
        let alarmeData1=abrirPasta
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[1].nome;
        h4.setAttribute('id','4h');
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas+":"+alarmeData1[1].minutos;
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
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
         div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
         h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[2].nome;
        h4.setAttribute('id','4h');
         p = document.createElement("p");
        p.innerHTML=alarmeData1[2].notas;
        p.setAttribute('id','1p');
         div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
         h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[2].horas+":"+alarmeData1[2].minutos;
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
    else if (abrirPasta[0]==3){ 
        let alarmeData1=abrirPasta
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[1].nome;
        h4.setAttribute('id','4h');
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas+":"+alarmeData1[1].minutos;
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
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
         div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
         h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[2].nome;
        h4.setAttribute('id','4h');
         p = document.createElement("p");
        p.innerHTML=alarmeData1[2].notas;
        p.setAttribute('id','1p');
         div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
         h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[2].horas+":"+alarmeData1[2].minutos;
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
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[3].nome;
            h4.setAttribute('id','4h');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[3].notas;
            p.setAttribute('id','1p');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div');
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[3].horas+":"+alarmeData1[3].minutos;
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
    else if (abrirPasta[0]==4){ 
        let alarmeData1=abrirPasta
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[1].nome;
        h4.setAttribute('id','4h');
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas+":"+alarmeData1[1].minutos;
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
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
         div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
         h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[2].nome;
        h4.setAttribute('id','4h');
         p = document.createElement("p");
        p.innerHTML=alarmeData1[2].notas;
        p.setAttribute('id','1p');
         div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
         h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[2].horas+":"+alarmeData1[2].minutos;
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
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[3].nome;
            h4.setAttribute('id','4h');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[3].notas;
            p.setAttribute('id','1p');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div');
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[3].horas+":"+alarmeData1[3].minutos;
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
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[4].nome;
            h4.setAttribute('id','4h');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[4].notas;
            p.setAttribute('id','1p');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div');
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[4].horas+":"+alarmeData1[4].minutos;
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
    else if (abrirPasta[0]==4){ 
        let alarmeData1=abrirPasta
        let div1 = document.createElement("div");
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
        let div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
        let h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[1].nome;
        h4.setAttribute('id','4h');
        let p = document.createElement("p");
        p.innerHTML=alarmeData1[1].notas;
        p.setAttribute('id','1p');
        let div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
        let h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[1].horas+":"+alarmeData1[1].minutos;
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
        div1.setAttribute('class','row alarme');
        div1.setAttribute('id','1div');
         div2 = document.createElement("div");
        div2.setAttribute('class','col-8');
        div2.setAttribute('id','2div');
         h4 = document.createElement("h4");
        h4.innerHTML=alarmeData1[2].nome;
        h4.setAttribute('id','4h');
         p = document.createElement("p");
        p.innerHTML=alarmeData1[2].notas;
        p.setAttribute('id','1p');
         div3 = document.createElement("div");
        div3.setAttribute('class','col-4');
        div3.setAttribute('id','3div');
         h5 = document.createElement("h5");
        h5.innerHTML=alarmeData1[2].horas+":"+alarmeData1[2].minutos;
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
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[3].nome;
            h4.setAttribute('id','4h');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[3].notas;
            p.setAttribute('id','1p');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div');
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[3].horas+":"+alarmeData1[3].minutos;
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
            div1.setAttribute('class','row alarme');
            div1.setAttribute('id','1div');
             div2 = document.createElement("div");
            div2.setAttribute('class','col-8');
            div2.setAttribute('id','2div');
             h4 = document.createElement("h4");
            h4.innerHTML=alarmeData1[4].nome;
            h4.setAttribute('id','4h');
             p = document.createElement("p");
            p.innerHTML=alarmeData1[4].notas;
            p.setAttribute('id','1p');
             div3 = document.createElement("div");
            div3.setAttribute('class','col-4');
            div3.setAttribute('id','3div');
             h5 = document.createElement("h5");
            h5.innerHTML=alarmeData1[4].horas+":"+alarmeData1[4].minutos;
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
        
                div1.setAttribute('class','row alarme');
                div1.setAttribute('id','1div');
                 div2 = document.createElement("div");
                div2.setAttribute('class','col-8');
                div2.setAttribute('id','2div');
                 h4 = document.createElement("h4");
                h4.innerHTML=alarmeData1[5].nome;
                h4.setAttribute('id','4h');
                 p = document.createElement("p");
                p.innerHTML=alarmeData1[5].notas;
                p.setAttribute('id','1p');
                 div3 = document.createElement("div");
                div3.setAttribute('class','col-4');
                div3.setAttribute('id','3div');
                 h5 = document.createElement("h5");
                h5.innerHTML=alarmeData1[5].horas+":"+alarmeData1[5].minutos;
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
    
    */
    
    var alarmeQt=abrirPasta[0];
    
}