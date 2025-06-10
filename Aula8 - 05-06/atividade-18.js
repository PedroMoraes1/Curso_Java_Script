// Crie uma div.

// Quando o mouse passar por cima, ela deve aumentar de tamanho.

// Quando o mouse sair, ela deve voltar ao tamanho original.

let bloco = document.getElementById("bloco");

bloco.addEventListener("mouseover", function () {
  bloco.style.width = "250px"
  bloco.style.height = "250px"
});

bloco.addEventListener("mouseout", function () {
  bloco.style.width = ""
  bloco.style.height = ""
});
