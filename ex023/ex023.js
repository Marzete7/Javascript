var filmes = []

function botao() {

    var filme = (document.getElementById("fil").value)
    var link = (document.getElementById("link").value)
    document.getElementById("lin").innerHTML = ''

    var filmaData = {
        Nome: filme,
        Link: link
    }

    filmes.push(filmaData)
    localStorage.setItem('filmes', JSON.stringify(filme))

    for (var i in filmes) {

        document.getElementById("lin").innerHTML += `<div> ${filmes[i].Nome} <br> <img src="${filmes[i].Link}" class="imagem"> </div>`
    }

}

function botao2() {
    var sorteio = parseInt(Math.random() * filmes.length) //Para sortear todas as opções dentro do vetor filmes

    document.getElementById("recomendacao").innerHTML = ` ${filmes[sorteio].Nome} <br> <img src="${filmes[sorteio].Link}" class="imagem2"> <br>`
}