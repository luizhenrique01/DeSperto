function Login() {
    let emailUsuario = document.getElementById('emailUsuario').value;
    let senhaUsuario = document.getElementById('senhaUsuario').value;

    if (emailUsuario == '' && senhaUsuario == '') {
        document.getElementById('emailUsuario').focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nenhum campo preenchido!',
        });
    } else if (emailUsuario == '') {
        document.getElementById('emailUsuario').focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo de Email vazio!',
        });
    } else if (senhaUsuario == '') {
        document.getElementById('senhaUsuario').focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo senha vazio',
        })
    } else {

        //recuperando valor do LocalStorage
        let usuariosGravados = JSON.parse(localStorage.getItem('usuarios'));
        let usuarioIndex = usuariosGravados.findIndex(usuario => usuario.emailUsuario === emailUsuario);
        if (usuarioIndex === -1) { // -1 = email nao encontrado
            Swal.fire({
                icon: 'warning',
                title: 'Email fora do registro!',
                showConfirmButton: false,
                timer: 1500
            });
        } else { //email validado => validacao senha
            if (usuariosGravados[usuarioIndex].senhaUsuario !== senhaUsuario) { //senha incorreta
                Swal.fire({
                    icon: 'warning',
                    title: 'Senha incorreta!',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else { // email & seha corretos
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)


                    }
                });

                Toast.fire({
                    icon: 'success',
                    title: `Bem vindo, ${usuariosGravados[usuarioIndex].nomeUsuario} !`
                });


                localStorage.setItem('usuarioLogado', JSON.stringify(usuariosGravados[usuarioIndex].nomeUsuario)); //salvando nome no localstorage
                window.location.href = 'telaInterna.html';
                
            }
        }
    }
}