//https://pokeapi.co/api/v2/pokemon/ditto

let pokemon_image = document.getElementById("pokemon_image")
let pokemon_number = document.getElementById("pokemon_number")
let pokemon_name = document.getElementById("pokemon_name")

let btn_search = document.getElementById("btn-search") 
let input_search = document.getElementById("input_search")

let btn_next = document.getElementById("btn-next")
let btn_prev = document.getElementById("btn-prev")
let searchPokemon = 1
 
function buscarPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      console.log(data.id)
      console.log(data.name)
      console.log(
        data.sprites.versions["generation-v"]["black-white"].animated
          .front_default
      );

      pokemon_number.innerText = data.id
      pokemon_name.innerText = data.name
      pokemon_image.src =
        data.sprites.versions["generation-v"][
          "black-white"
        ].animated.front_default;
      searchPokemon = data.id
    })
    .catch((err) => {
        pokemon_name.innerText = "Não encontrado 😭"
    })
}


btn_search.addEventListener("click", function(event){
    buscarPokemon(input_search.value)
    event.preventDefault()
})

btn_next.addEventListener("click" , function(){
    searchPokemon += 1
    buscarPokemon(searchPokemon)
})

btn_prev.addEventListener("click" , function(){
    if (searchPokemon >= 1){
        searchPokemon -= 1
        buscarPokemon(searchPokemon)
    }
})

buscarPokemon(searchPokemon)