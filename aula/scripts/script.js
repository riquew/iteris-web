function isLoaded() {
    updateYear();
    const formSubmit = document.querySelector("form");
    formSubmit.addEventListener("submit", formHandle);
}

function updateYear() {
    const textFooter = document.querySelector(".footer p");
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