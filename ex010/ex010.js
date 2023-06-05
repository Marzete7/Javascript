function botao() {

    var n = document.getElementById("texto1").value

    var n2 = document.getElementById("texto2").value 


   if (n == "adm" && n2 == "1234")
   {
    document.getElementById("Resultado").innerHTML = `Sua conta foi validada`
   }

   else
   {
    document.getElementById("Resultado").innerHTML = `Sua conta não foi validada`
   }

}