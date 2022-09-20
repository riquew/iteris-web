const getData = () => 
  fetch('http://localhost:3000/submissoes')
    .then(response => response.json())
    .catch(err => console.error(err));

function isLoaded() {
    const textFooter = document.querySelector(".footer p");
    if(textFooter) updateYear(textFooter);
    const formSubmit = document.querySelector("form");
    if(formSubmit) formSubmit.addEventListener("submit", formHandle);
}

function updateYear(textFooter) {
    let yearNow = new Date().getFullYear();
    textFooter.textContent += ` - ${yearNow}`
}

function formHandle(event) {
    event.preventDefault();
    let data = {
        nome : event.target.nome.value,
        tipo : event.target.tipo.value,
    };
    console.log(data);
    event.target.nome.value = '';
    event.target.tipo.value = '';
}


document.addEventListener("DOMContentLoaded", isLoaded);