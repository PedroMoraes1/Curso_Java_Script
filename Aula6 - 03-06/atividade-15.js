//Crie uma função chamada celsiusParaFahrenheit(celsius) que converta e retorne a temperatura em Fahrenheit.

// A fórmula é: F = C × 1.8 + 32

function celsiusParaFahrenheit(celsius){
    return celsius * 1.8 + 32
}

let resultado = celsiusParaFahrenheit(20)

setTimeout(function(){
    console.log(`A temperatura em Fahrenheit é ${resultado}°F 😁`)
}, 2000)


