import axios from "axios";

const url = 'http://localhost:8080/imoveis'

export function getImoveis() {
    return axios.get(url)
    .then(response => response.data)
}

export function getImovelPorId(id) {
    const urlComId = url + "/" + id;
    return axios.get(urlComId)
    .then(response => response.data)

}
