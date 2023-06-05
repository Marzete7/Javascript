function botao () 
{
    var n1 = document.getElementById("resultado").innerHTML = ``
    
  for(let i = 1;i <= 20; i++) 
  {
    var n1 = i % 2
    if (n1 > 0) {
        document.getElementById("resultado").innerHTML += `${n1} <br>`
    } 
  }
}