function botao() {
    var filmes = [ 'homem aranha',
                   'tarugas ninja',
                   'hulk', 
                   'batman',
                   'kung-fu panda']

    Filmes.innerHTML = ''
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("Filmes").innerHTML +=
            `Posição no vetor ${i} - Filme ${filmes[i]} <br>`
    }
}