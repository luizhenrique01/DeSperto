function CriarConta() {
    var nomeUsuario = document.getElementById('nomeUsuario').value;
    var emailUsuario = document.getElementById('emailUsuario').value;
    var senhaUsuario = document.getElementById('senhaUsuario').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    let nomeUsuario2 = document.getElementById('nomeUsuario');
    let emailUsuario2 = document.getElementById('emailUsuario');
    let senhaUsuario2 = document.getElementById('senhaUsuario');
    let confirmarSenha2 = document.getElementById('confirmarSenha');

    if (senhaUsuario == '' && nomeUsuario == '' && emailUsuario == '' && confirmarSenha == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ta de sacanagem? nem um campozinho meu parceiro? ',
        })
    } else if (nomeUsuario == '') {
        document.getElementById('nomeUsuario').focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo Nome Vazio',
        })
    } else if (emailUsuario == '') {
        document.getElementById('emailUsuario').focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo Email Vazio',
        })
    } else if (senhaUsuario == '') {
        document.getElementById('senhaUsuario').focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo confirmar senha vazio',
        })
    } else if (confirmarSenha == '') {
        document.getElementById('confirmarSenha').focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo Confirmar senha vazio',
        })
    } else {

        if (senhaUsuario === confirmarSenha) {

            nomeUsuario2.value = "";
            emailUsuario2.value = "";
            senhaUsuario2.value = "";
            confirmarSenha2.value = "";

            Swal.fire({
                icon: 'success',
                title: 'Uhul!',
                text: 'Cadastrado com sucesso!',
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'As senhas não são iguais',
            })
        }

    }


}