import { useState } from "react";      // hook para estados locais em componentes funcionais
import "./style.css";                  // estilos do componente

export const Card = () => {
  /* ---------- estados ---------- */
  const [cep, setCep] = useState("");           // valor digitado no input

  const [logradouro, setLogradouro] = useState(" -- "); // rua
  const [bairro, setBairro]         = useState(" -- "); // bairro
  const [regiao, setRegiao]         = useState(" -- "); // cidade / região
  const [estado, setEstado]         = useState(" -- "); // UF

  /* ---------- handler do formulário ---------- */
  const buscarCEP = (e) => {
    e.preventDefault();                         // cancela reload padrão do form

    const cepLimpo = cep.replace(/\D/g, "");    // remove tudo que não for número

    if (cepLimpo.length !== 8) {                // valida tamanho
      alert("CEP deve ter 8 dígitos.");
      return;
    }

    // consulta a API ViaCEP
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then(res => res.json())                  // converte resposta em JSON
      .then(data => {
        if (data.erro) {                        // CEP inexiste
          alert("CEP não encontrado.");
          return;
        }
        /* preenchimento dos estados */
        setLogradouro(data.logradouro || "—");
        setBairro(data.bairro || "—");
        setRegiao(data.localidade || data.regiao || "—"); // 'localidade' é a cidade
        setEstado(data.uf || data.estado || "—");         // 'uf' é a sigla do estado
      })
      .catch(() => alert("Erro ao consultar o CEP."));    // erro de rede ou parse
  };

  /* ---------- render ---------- */
  return (
    <div className="container">
      <h1>🔍 Consulta de CEP</h1>

      {/* formulário controlado */}
      <form id="cep-form" onSubmit={buscarCEP}>
        <input
          type="text"
          id="input_cep"
          placeholder="Digite o CEP"
          maxLength={9}                              // formato: 00000000
          value={cep}                                // valor ligado ao estado
          onChange={e => setCep(e.target.value)}     // atualiza estado a cada tecla
          required
        />
        <button type="submit" id="btn-cep">
          Buscar
        </button>
      </form>

      {/* resultado */}
      <div className="resultado" id="resultado">
        <p><strong>Logradouro:</strong> <span id="logradouro">{logradouro}</span></p>
        <p><strong>Bairro:</strong>     <span id="bairro">{bairro}</span></p>
        <p><strong>Região:</strong>     <span id="cidade">{regiao}</span></p>
        <p><strong>Estado:</strong>     <span id="estado">{estado}</span></p>
      </div>
    </div>
  );
};
