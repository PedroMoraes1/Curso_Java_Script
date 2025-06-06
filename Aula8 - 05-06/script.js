// let p1 = document.getElementById("p1")

// let btn = document.getElementsByClassName("btn")

// btn[0].addEventListener("click", function(){
//     p1.innerText = "Troquei"

// })

// let c1 = document.getElementById("c1")

// c1.addEventListener("mouseover", function(){
//     c1.style.backgroundColor = "pink"
// })

// c1.addEventListener("mouseout", function(){
//     c1.style.backgroundColor = "blue"
// })

// click - Quando o usuário cila
// mouseouver - Quando o usuário passa o mouse por cima 
// mouseout - Quando o usuário retira o mouse de cima

// document.addEventListener("keydown", function(event){
//     // alert(`Tecla apertada: ${event.key}`)

//     if(event.key.toLowerCase() === "a"){ // toLowerCase() - igualar a com A maiúsculo
//         alert("Você apertou a tecla: A")
//     } 
// }) // keydown - qualquer tecla do teclado (quando apertada)

// let selecionar = document.getElementById("selecionar")

// selecionar.addEventListener("change", function(event){
//     console.log(`Opção selecionada: ${event.target.value}`)
// })

    // function assarPizza(callback){
    //     setTimeout(() => {
    //         console.log("Pizza chegou! 🍕")
    //         callback()
    //     }, 2000)
    // }

    // function comerPizza() {
    //     console.log("Comendo a pizza")
    // }

    // console.log("Preparando a pizza")
    // assarPizza(comerPizza)

function pedirComida(callback) {
    setTimeout (() => {
        console.log("Pedido Pronto!")
        callback()
    }, 2000)
}

function comer(){
    console.log("Comendo a comida")
}

console.log("Pedido feito...Aguarde")
pedirComida(comer)