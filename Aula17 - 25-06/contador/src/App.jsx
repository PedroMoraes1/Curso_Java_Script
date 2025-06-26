import { useState } from 'react'
import './App.css'

const App = () => {

  // const [ contador, setContador ] = useState(0)

  // const incrementar = () => {
  //   setContador(contador + 1)
  //   console.log(contador) // Vai mostrar valores atualizados
  // }
  
  const [ nome, setNome ] = useState(" -- ")
  const [ especie, setEspecie ] = useState(" -- ")
  const buscar = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      console.log(data.results[0].name)
      setNome(data.results[2].name)
      setEspecie(data.results[2].species)

    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      {/* <p>contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button> */}

      <p>Nome: {nome}</p>
      <p>Espécie: {especie}</p>
      <button onClick={buscar}>Buscar</button>
    </div>
  )
}

export default App