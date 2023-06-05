function botao() 
{
    var n = document.getElementById("texto1").value
    var n2 = document.getElementById("texto2").value

    if(n2 >= 16 && n2 < 18 || n2 > 65) 
    {
        document.getElementById("resultado").innerHTML = `${n}, você pode votar, mas não é obrigado`
    }
    else if(n2 >=18 && n2 <=65) 
    {
        document.getElementById("resultado").innerHTML = `${n}, você é obrigado a votar`
    }
    else if (n2 <16) 
    {
        document.getElementById("resultado").innerHTML = `${n}, você não pode votar`
    }

}