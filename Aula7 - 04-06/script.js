// --------------- Usando Id ----------------

    // let titulo = document.getElementById("titulo")
    // console.log(titulo)

    // let paragrafo = document.getElementById("paragrafo")
    // console.log(paragrafo)

    // let paragrafo2 = document.getElementById("paragrafo2")
    // console.log(paragrafo2)

    // let maya = document.getElementById("mayara")
    // console.log(maya)

    // let img = document.getElementById("img")
    // console.log(img)

    // let botao = document.getElementById("botao")
    // console.log(botao)

//  ----------- Usando Class ------------

    // let p1 = document.getElementsByClassName("p1")
    // console.log(p1)

    // let texto = document.getElementsByClassName("texto")
    // console.log(texto)

// ******** Estilizar *******

// let titulo = document.getElementById("titulo")

    // titulo.innerText = "Troquei!"
    // titulo.style.color = "blue"
    // titulo.style.fontSize = "45px"
    // titulo.style.backgroundColor = "gray"
    // titulo.style.border = "2px solid black"

let btn = document.getElementById("button")

// btn.onclick = function() {
//     alert("Você clicou")
// }

btn.addEventListener("click", function(){
    titulo.innerText = "Clique no Botão"
    titulo.style.color = "pink"
})