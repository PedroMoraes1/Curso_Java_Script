//https://pokeapi.co/api/v2/pokemon/ditto

let pokemon_image = document.getElementById("pokemon_image")
let pokemon_number = document.getElementById("pokemon_number")
let pokemon_name = document.getElementById("pokemon_name")

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        
        console.log(data.id)
        console.log(data.name)
        console.log(data.sprites.versions["generation-v"]["black-white"].animated.front_default)

        pokemon_number.innerText = data.id
        pokemon_name.innerText = data.name
        pokemon_image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default

    })