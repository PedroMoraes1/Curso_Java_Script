// https://viacep.com.br/ws/01001000/json/

function buscarCEP(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}

buscarCEP("04757000")