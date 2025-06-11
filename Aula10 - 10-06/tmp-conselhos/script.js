let conselho = document.getElementById("conselho-gerado")
let btn = document.getElementById("conselho")

btn.addEventListener("click", function(){
    fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => {
            
                conselho.innerText = data.slip.advice

        })
})