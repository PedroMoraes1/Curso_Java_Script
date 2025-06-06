// Crie uma div com um ID.

// Quando o usuário passar o mouse por cima, a cor de fundo deve mudar para azul claro.

// Quando o mouse sair, deve voltar à cor original

let bloco = document.getElementById("bloco")

bloco.addEventListener("mouseover", function(){
    bloco.style.backgroundColor = "royalblue"
})

bloco.addEventListener("mouseout", function(){
    bloco.style.backgroundColor = ""
})