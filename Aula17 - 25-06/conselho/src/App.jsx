import { useState } from "react";
import "./App.css";

function App() {
  
  const [conselho, setConselho] = useState(" -- ");
  const buscar = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setConselho(data.slip.advice);
      })
  }
  return (
    <main class="glass-card">
      <h1>💡 Conselho do Dia</h1>
      <p id="advice">
        Clique no botão abaixo para receber um conselho aleatório!
      </p>
      <p id="conselho-gerado">{conselho}</p>
      <button id="conselho" onClick={buscar}>Gerar Conselho</button>
    </main>
  );
}

export default App;
