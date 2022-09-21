const postData = (novaSubmissao) => 
    fetch(`http://localhost:3000/submissoes`, {
    method: "POST",
    headers: {
        "Content-Type": "application/JSON",
    },
    body: JSON.stringify(novaSubmissao),
})
    .then((response)=> response.json())
    .catch((err) => console.log(err));


const getData = () =>
    fetch("http://localhost:3000/submissoes")
    .then((response) => response.json())
    .catch((err) => console.error(err));


const addSubmits = async(ulEl) => {
    const result = await getData();
    if (result && result.length) {
        result.forEach((item) => addListItem(item, ulEl));
      }
    };
    
    function updateYear(textFooter) {
        let yearNow = new Date().getFullYear();
        textFooter.textContent += ` - ${yearNow}`
    }
    
    function formHandle(event) {
        event.preventDefault();
        const ulEl = document.querySelector('.main ul');
        if(ulEl) {
            let data = {
                nome : event.target.nome.value,
                tipo : event.target.tipo.value,
            };
            postData(data).then((novaSubmissao)=> {
                addListItem(data, ulEl);
            })
            console.log(data);
            event.target.nome.value = '';
            event.target.tipo.value = '';
        }
    }

    function addListItem(data, ulEl) {
        const liEl = document.createElement("li");
        liEl.innerText = `${data.nome} - Tipo: ${data.tipo}`;
        ulEl.appendChild(liEl);
    }
    
    function isLoaded() {
        const textFooter = document.querySelector(".footer p");
        if(textFooter) updateYear(textFooter);
        const formSubmit = document.querySelector("form");
        if(formSubmit) formSubmit.addEventListener("submit", formHandle);
        const ulEl = document.querySelector(".submits ul");
        if(ulEl) addSubmits(ulEl);
    }

document.addEventListener("DOMContentLoaded", isLoaded);