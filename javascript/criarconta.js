
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function CriarConta() {
    var nomeUsuario = document.getElementById('nomeUsuario').value;
    var emailUsuario = document.getElementById('emailUsuario').value;
    var senhaUsuario = document.getElementById('senhaUsuario').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    //validação de campos
    if (senhaUsuario == '' && nomeUsuario == '' && emailUsuario == '' && confirmarSenha == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ta de sacanagem? nem um campozinho meu parceiro?',
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
    } else if (senhaUsuario !== confirmarSenha) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'As senhanão se coincidem ',
        })
    } else if (!validateEmail(emailUsuario)) { //validation @ function regex
        document.getElementById('emailUsuario').focus();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O email não e valido',
        })

    } else {
        const usuario = { id: Date.now(), permission: 'true', nomeUsuario, emailUsuario, senhaUsuario }
        let usuarioGravado = JSON.parse(localStorage.getItem("usuarios"));

        if (usuarioGravado == null) { //verificacao para criar usuario
            localStorage.setItem('usuarios', JSON.stringify([])); //criando array de usuarios
            usuarioGravado = JSON.parse(localStorage.getItem('usuarios')); // atualiza array usuarios 

            //validação de email 

            let usuarioIndex = usuarioGravado.findIndex(usuario => usuario.emailUsuario === emailUsuario);
            if (usuarioIndex !== -1) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Email já está cadastrado no sistema!',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                usuarioGravado.push(usuario); //adiciona novo usuario ao array
                localStorage.setItem('usuarios', JSON.stringify(usuarioGravado)); // grava novo usuario no localstorage         
            }

        } else { //usuario ja existente (!= de null)
            let usuarioIndex = usuarioGravado.findIndex(usuario => usuario.emailUsuario === emailUsuario);
            if (usuarioIndex !== -1) { //ja existe um email na memoria
                Swal.fire({
                    icon: 'warning',
                    title: 'Email já está cadastrado no sistema!',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Cadastrado com sucesso!',
                    showConfirmButton: false,
                    timer: 3000
                });
                usuarioGravado.push(usuario); //adiciona um novo usuario no array
                localStorage.setItem('usuarios', JSON.stringify(usuarioGravado)); //grava no local storage  
                document.getElementById('nomeUsuario').value = "";
                document.getElementById('emailUsuario').value = "";
                document.getElementById('senhaUsuario').value = "";
                document.getElementById('confirmarSenha').value = "";
            }
        }
    }


}