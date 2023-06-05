function Calculo() {

var n = document.getElementById("cal").value 

var dobro = n*2

var metade = n/2

document.getElementById("Numero").innerHTML += `<br> O dobro de ${n} é ${dobro} e a metade é ${metade}`

}

function Limpar ()
{
    document.getElementById("cal").value = ""
    document.getElementById("Numero").innerHTML =""
   
}


