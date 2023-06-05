var filmes = []

function botao() {
    
    filmes.push(document.getElementById("fil").value)
    document.getElementById("Filmes").innerHTML = ""



    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("Filmes").innerHTML += `${filmes[i]} <br>`
    }
}