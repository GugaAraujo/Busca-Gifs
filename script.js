const API_KEY = "prH9JItXl5I54AnABDe4wxUn9JCVQ9Pm";
const sticker = document.querySelector("#sticker") //input com a busca do cliente
const resultadosContainer = document.querySelector(".resultadosContainer") // refere-se a Div que receberá os resultados
const botao = document.querySelector(".btn-search-sticker"); //refere-se ao botão

botao.addEventListener("click", (evento) => {
    botao.textContent = "";
    resultadosContainer.innerHTML = "";
    evento.preventDefault();
    fetch(`https://api.giphy.com/v1/stickers/search?q=${sticker.value}&api_key=${API_KEY}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const principal = document.createElement("div");
        principal.setAttribute("class","principal");
        data.data.forEach(element => {
            const card = document.createElement("div");
            card.setAttribute("class","card");
            card.setAttribute("card-id",element.id);
            const gif = document.createElement("img");
            gif.setAttribute("src",element.images.downsized_medium.url);

            
            resultadosContainer.appendChild(principal);
            principal.appendChild(card);
            card.appendChild(gif);

        });
        document.querySelector('.form').reset("");
    })

    .catch((erro)=>{
        console.log("Deu erro")
    })


    setTimeout(function(){botao.textContent = "GO!"; }, 150);

})



