
function Média() {

    var n = Number(document.getElementById("cal").value)

    var n2 = Number(document.getElementById("cal2").value)

    var nome = String(document.getElementById("nome").value)

    var média = (n + n2) / 2

    if (n > 10) {
        alert('valor da primeira nota não permitido')
        exit
    }

    if (n2 > 10) {
        alert('valor da segunda nota não permitido')
        exit
    }

    
    if (n < 0) {
        alert('valor da primeira nota não permitido')
        exit
    }

    if (n2 < 0) {
        alert('valor da segunda nota não permitido')
        exit
    }


    if (média >= 7) {
        document.getElementById("Resultado").innerHTML = `o aluno ${nome} tirou nota ${n} e ${n2} sua média foi ${média} <b class"aprov">APROVADO<b> `   
    }

    else {
        document.getElementById("Resultado").innerHTML = `o aluno ${nome} tirou nota ${n} e ${n2} sua média foi ${média} <b class"reprov">REPROVADO <b>`
    }

}