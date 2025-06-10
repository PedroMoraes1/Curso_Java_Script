// Crie um parágrafo e uma div.

// Quando o usuário passar o mouse na div, o parágrafo deve exibir a mensagem:

// "Mouse detectado!"

// Quando o mouse sair, a mensagem deve desaparecer.


let bloco = document.getElementById("bloco")
let texto = document.getElementById("texto")

bloco.addEventListener("mouseover", function(){
    texto.innerText = "Mouse detectado!"
})

bloco.addEventListener("mouseout", function(){
    texto.innerText = ""
})