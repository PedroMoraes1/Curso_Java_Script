// https://jsonplaceholder.typicode.com/users

let nome = document.getElementById("nome")
let username = document.getElementById("username")
let rua = document.getElementById("rua")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        nome.innerText = data[0].name
        username.innerText = data[0].username
        rua.innerText = data[0].address.street
    })
    .catch((err) => {
        nome.innerText = "Não foi possível localizar o usuário"
        username.innerText = "Não foi possível localizar o username"
        rua.innerText = "Não foi possível localizar a rua"
    })

        