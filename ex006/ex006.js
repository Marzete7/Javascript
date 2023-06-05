function Calculo() {

    var n =  Number(document.getElementById("cal").value)

    var n2 = Number(document.getElementById("cal2").value)
    
    var soma = n + n2
    
    var subtração = n - n2

    var multiplicação = n * n2

    var divisão = n / n2

    var resto = n % n2

    var elevado = n ** n2


    
    document.getElementById("Numero").innerHTML += `<br> ${n} + ${n2} = ${soma} <br>
    ${n} - ${n2} = ${subtração} <br>
    ${n} * ${n2} = ${multiplicação} <br>
    ${n} / ${n2} = ${divisão} <br>
    ${n} % ${n2} = ${resto} <br>
    ${n} ** ${n2} = ${elevado}`
    
    }