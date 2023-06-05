var nrSorteado = parseInt(Math.random() * 101)
var tentativas = 0

function botao() {
    var chute = prompt('chute um número')
    tentativas++

    if (chute == nrSorteado) {
        document.getElementById("resultado").innerHTML += `<b>PARABENS, VOCÊ ACERTOU O NÚMERO ${nrSorteado} em ${tentativas} tentativas</b>`
    }

    else if (chute > nrSorteado) {
        document.getElementById("resultado").innerHTML += `você chutou ${chute} chute um número menor <br>`

        if (tentativas == 5) {
            alert("GAME OVER, nº de tentativas excedidas")
        }
    }

    else if (chute < nrSorteado) {
        document.getElementById("resultado").innerHTML += `você chutou ${chute} chute um numero maior <br>`
    }
}

function botao2() {
    tentativas = 0
    document.getElementById("resultado").innerHTML = ""
    nrSorteado = parseInt(Math.random() * 101)
}