onload = () => {
    document.getElementById('novaPasta').onclick = function () {
        window.location.assign("telaCriarPasta.html")
    }
    //recuperando Usuario nome
    let usuariosGravados = JSON.parse(localStorage.getItem('usuarios'));
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    
    
    // let usuarioIndex = usuariosGravados.findIndex(usuario => usuario.email);
    // console.log("Batata com arroz: " + usuarioIndex)
    
    
    //lembrar de puxar os dados do usuarios gravados e colocar *aray de relogios dentro*
    document.getElementById('nomeUsuario').innerText = `Usuario: ${usuarioLogado}`
}
