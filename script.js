// API_KEY prH9JItXl5I54AnABDe4wxUn9JCVQ9Pm
const API_KEY = "prH9JItXl5I54AnABDe4wxUn9JCVQ9Pm";
const sticker = document.querySelector("#sticker") //input com a busca do cliente
const resultadosContainer = document.querySelector(".resultadosContainer") // refere-se a Div que receberá os resultados
const botao = document.querySelector(".btn-search-sticker"); //refere-se ao botão

botao.addEventListener("click", (evento) => {
    evento.preventDefault();
    fetch(`https://api.giphy.com/v1/stickers/search?q=${sticker.value}&api_key=${API_KEY}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.data.forEach(element => {
            
   
        });

    })
    .catch((erro)=>{
        console.log("Deu erro")
    })

})


