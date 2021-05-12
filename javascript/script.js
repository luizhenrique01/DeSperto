function Login(){

    let nomeUsuario = document.getElementById('nomeUsuario').value;
    let senhaUsuario = document.getElementById('senhaUsuario').value;
    //teste para o login 
    let nomeFake = "luizhassis01@gmail.com"
    let senhaFake = "luiz123"

    if(nomeUsuario === nomeFake){
        if(senhaUsuario === senhaFake){
                window.location.href = "alarme.html"

        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sua senha está errada',
              })
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Seu e-mail está errado',
          })
    }

}