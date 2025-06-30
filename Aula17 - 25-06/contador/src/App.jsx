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
  const [ personagens, setPersonagens ] = useState([])
  const [ indiceAtual, setIndiceAtual ] = useState(0)
  
  const buscar = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      console.log(data.results[0].name)
      setPersonagens(data.results) // Guarda todos os personagens
      
      // Mostra o personagem atual baseado no índice
      if (data.results[indiceAtual]) {
        setNome(data.results[indiceAtual].name)
        setEspecie(data.results[indiceAtual].species)
      }
      
      // Incrementa o índice para o próximo personagem
      setIndiceAtual(indiceAtual + 1)
      
      // Se chegou ao final da lista, volta para o início
      if (indiceAtual >= data.results.length - 1) {
        setIndiceAtual(0)
      }

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
      <p>Personagem {indiceAtual + 1} de {personagens.length}</p>
      <button onClick={buscar}>Próximo Personagem</button>

    </div>
  )
}

export default App