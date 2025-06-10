    // function verificarIdade(callbackSucesso, callbackErro){
    //     let idade = 18
    //     if(idade >= 18){
    //         callbackSucesso()
    //     } else {
    //         callbackErro()
    //     }
    // }

    // function maiorIdade(){
    //     console.log("Maior de idade")
    // }

    // function menorIdade(){
    //     console.log("Menor de idade")
    // }

    // verificarIdade(maiorIdade, menorIdade)


// ------------ Promises -------------

    // let pizzaChegou = true

    // const pedido = new Promise((resolve, reject) => {
    //     if(pizzaChegou == true){
    //         resolve("Pizza Chegou!")
    //     } else {
    //         reject("Pedido cancelado")
    //     }
    // })

    // const verificarResultado = new Promise((resolve, reject) => {
    //     let resultado = 1

    //     if (resultado == 2){
    //         resolve("Uhhuuuuuuul! Resultado é 2")
    //     } else {
    //         reject("Xiiiii, não é 2")
    //     }
    // })

    // verificarResultado
    //     .then((res) =>{
    //         console.log(res)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })



// ----------- FETCH -------------


let nome = document.getElementById("nome")
let usernaem = document.getElementById("username")
let email = document.getElementById("email")

nome.innerText

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0])
            nome.innerText = `Nome: ${data[0].name}`
            username.innerText = `Username: ${data[0].username}`
            email.innerText = `Email: ${data[0].email}`
        }) 
        .catch((err) => {
            nome.innerText = "Não foi possível localizar o nome"
        })

        