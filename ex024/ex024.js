var Listafilmes = []

Listafilmes = JSON.parse(localStorage.getItem("filmaData"))
if (Listafilmes == null) {
    Listafilmes = []
}

function botao() {

    var filme = (document.getElementById("fil").value)
    var link = (document.getElementById("link").value)
    document.getElementById("lin").innerHTML = ''

    var filmaData = {
        Nome: filme,
        Link: link
    }

   Listafilmes.push(filmaData)
    localStorage.setItem("filmaData", JSON.stringify(Listafilmes))

    for (var i in Listafilmes) {

        document.getElementById("lin").innerHTML += `<div>
         ${Listafilmes[i].Nome} <br> <img src="${Listafilmes[i].Link}" class="imagem"> 
         </div>`
    }

}

function botao2() {
    var sorteio = parseInt(Math.random() * Listafilmes.length) //Para sortear todas as opções dentro do vetor filmes

    document.getElementById("recomendacao").innerHTML = ` ${Listafilmes[sorteio].Nome} <br> <img src="${Listafilmes[sorteio].Link}" class="imagem2"> <br>`
}