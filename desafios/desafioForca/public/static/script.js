const getData = () =>
    fetch("http://localhost:3000/palavras")
    .then((response) => response.json())
    .catch((err) => console.error(err));

const getWord = async(forcaTexto) => {
    const result = await getData();
    const randomNumber = Math.floor(Math.random() * 4);
    const randomWord = result[randomNumber];
    addWord(randomWord, forcaTexto);
}

const addWord = (randomWord, forcaTexto) => {
    const palavraCerta = (randomWord.palavra).toUpperCase();
    const tamanhoPalavra = palavraCerta.length;
    let palavraLista = new Array(tamanhoPalavra).fill("_")
    console.log(palavraCerta)
    forcaTexto.textContent += `${palavraLista}`;
}

function formHandle(event) {
    event.preventDefault();
    let letraDigitada = event.target.letra.value.toUpperCase();
    checkLetterInWord(letraDigitada[0]);
}

function checkLetterInWord(letra) {
    for(let i in palavraCerta) {
        (palavraCerta[i] === letra) ? palavraLista[i] = letra : addToBucket(letra)
    }
    forcaTexto.textContent += `${palavraLista}`;
}


function addToBucket(letra) {
    const bucketUl = document.querySelector("ul");
    if(bucketUl) {
        const liEl = document.createElement("li");
        liEl.innerText = `${letra}`;
        bucketUl.appendChild(liEl);
    }
    
}

function isLoaded() {
    if(forcaTexto) getWord(forcaTexto);
    const letraForm = document.querySelector("form");
    if(letraForm) letraForm.addEventListener("submit", formHandle);

}

const forcaTexto = document.querySelector("h1");
document.addEventListener("DOMContentLoaded", isLoaded);

