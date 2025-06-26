import { useState } from "react";
import "./style.css";

export const Card = () => {
  
  const [logradouro, setLogradouro] = useState(" -- ");
  const [bairro, setBairro] = useState(" -- ");
  const [regiao, setRegiao] = useState(" -- ");
  const [estado, setEstado] = useState(" -- ");

  function buscarCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setRegiao(data.regiao)
        setEstado(data.estado)
      });
  }

  return (
    <div class="container">
      <h1>🔍 Consulta de CEP</h1>

      <form id="cep-form">
        <input
          type="text"
          id="input_cep"
          placeholder="Digite o CEP"
          maxlength="9"
          onClick={buscarCEP}
          required
        />
        <button type="submit" id="btn-cep">
          Buscar
        </button>
      </form>

      <div class="resultado" id="resultado">
        <p>
          <strong>Logradouro:</strong> <span id="logradouro">{logradouro}</span>
        </p>
        <p>
          <strong>Bairro:</strong> <span id="bairro">{bairro}</span>
        </p>
        <p>
          <strong>Região:</strong> <span id="regiao">{regiao}</span>
        </p>
        <p>
          <strong>Estado:</strong> <span id="estado">{estado}</span>
        </p>
      </div>
    </div>
  );
};
