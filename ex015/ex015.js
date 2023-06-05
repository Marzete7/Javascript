function botao () 
{
    var n = document.getElementById("numero").value
    document.getElementById("resultado").innerHTML = `a tabuada do ${n} é: <br>`

    var conta = 1
  while(conta <= 10) 
  {
    var n = document.getElementById("numero").value
    var nx = n*conta
    document.getElementById("resultado").innerHTML +=`${n} X ${conta} = ${nx}<br>`
    conta ++
  }
}