onload = () => {
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    document.getElementById('nomeUsuario').innerText = `Usuario: ${usuarioLogado}`
}

function Deslogar(){
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    window.alert(`${usuarioLogado} você foi desconectado com sucesso!`)
    localStorage.setItem('usuarioLogado', '');
    window.location.href = 'index.html'
}