function botao () 
{
    var quantidade = document.getElementById("numero").value 
    var resultado = document.getElementById("Img")

    Img.innerHTML = ""
    for (let index = 0; index < quantidade; index++) {
        resultado.innerHTML += ` <img src="img.png" class="imagem">`
    }
}