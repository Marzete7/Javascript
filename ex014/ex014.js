function botao () 
{
  document.getElementById("resultado").innerHTML = ``

  var conta = 1
  while(conta <= 6) 
  {
    var nSorteado =  parseInt(Math.random() * 60) + 1
    document.getElementById("resultado").innerHTML += `${nSorteado} `
    conta ++
  }
}