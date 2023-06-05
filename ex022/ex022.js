var filmes = []
var links = []


function botao() {

    var filme = (document.getElementById("fil").value)
    var link = (document.getElementById("link").value)
    document.getElementById("lin").innerHTML = ''


        filmes.push(filme)
    links.push(link)

    for (var i = 0; i < filmes.length; i++) {

        document.getElementById("lin").innerHTML += `<div> ${filmes[i]} <br> <img src="${links[i]}" class="imagem"> </div>`
    }

}

function botao2() {
    var sorteio = parseInt(Math.random() * filmes.length) //Para sortear todas as opções dentro do vetor filmes

    document.getElementById("recomendacao").innerHTML = ` ${filmes[sorteio]} <br> <img src="${links[sorteio]}" class="imagem2"> <br>`
}