import { useState } from 'react'
import './App.css'

const App = () => {
  
  const [contador, setContador] = useState(0)
  const [nome, setNome] = useState(" -- ")
  const [especie, setEspecie] = useState(" -- ")

  const buscar = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        const i = contador % data.results.length
        setNome(data.results[i].name)
        setEspecie(data.results[i].species)
        setContador(contador + 1)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Espécie: {especie}</p>
      <button onClick={buscar}>Buscar</button>
    </div>
  )
}

export default App
