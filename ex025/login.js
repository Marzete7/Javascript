var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

function botaoEntrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (validarUsuario(login, senha)) {
        alert('Bem vindo ao sistema')
    } else {
        alert('VERIFIQUE SEU USUÁRIO E SENHA OU SE CADASTRE')
    }
}

function validarUsuario(login, senha) {
   var encontrol = false
    listaUsuarios.forEach(item => {

        if (item.usuario == login && item.senha == senha) {
            encontrol = true
        }
    })
    return encontrol
}

function botaoCadastrar() {
    location.href = 'ex025.html'
}