var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null){
    listaUsuarios = []
}
exibirUsuarios()

console.log(listaUsuarios)

function validarCadastro(nome, login, senha, confirmarSenha){
    if (senha != confirmarSenha) {
        alert ('Verifique suas senhas pois estão diferentes')
        return false
    }

    if (nome != '' && login != '' && senha != '' && confirmarSenha != '' ) {
        return true
    } else {
        return false
    }    
}

function botaoCadastrar() {
    var nome = document.getElementById("nome").value
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value
    var confirmarSenha = document.getElementById("confirmarSenha").value
    
    var possoCadastrar = validarCadastro(nome, login, senha, confirmarSenha)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    
    var usuario = {
        nome: nome,
        usuario: login, 
        senha: senha
    }
    listaUsuarios.push(usuario)
    
    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaUsuarios) )

    exibirUsuarios()

    document.getElementById("nome").value = ''
    document.getElementById("login").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("confirmarSenha").value = ''
    document.getElementById("nome").focus()

    alert ('Usuário cadastrado com sucesso. Faça o login.   ')

    window.location.href = 'login.html'
}

function exibirUsuarios(){
    document.getElementById('resultado').innerHTML = ''

     //for (var i in listaUsuarios) {
        listaUsuarios.forEach ( (item,pos) => 
        {
            document.getElementById('resultado').innerHTML +=
            `<div class ="item">
                <p><b>Nome:</b> ${item.nome} - <b>Login:</b> ${item.usuario}</p>
                <img src="excluir.svg"  onclick= excluirUsuario(${pos})>
            </div>`

        })

    }

function excluirUsuario(pos)
 {
    if (confirm('Deseja realmente excluir este usuário?')){
        listaUsuarios.splice(pos,1)
        localStorage.setItem( 'bdUsuarios', JSON.stringify (listaUsuarios))
        exibirUsuarios()
    }
}