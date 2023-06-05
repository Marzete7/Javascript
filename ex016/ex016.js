function botao () 
{
    var n = document.getElementById("numero").value
    document.getElementById("resultado").innerHTML = `a tabuada do ${n} é: <br>`

    
  for(let i = 1;i <= 10; i++) 
  {
    var n = document.getElementById("numero").value
    var nx = n*i
    document.getElementById("resultado").innerHTML +=`${n} X ${i} = ${nx}<br>`
  }
}