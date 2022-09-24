import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import { getImoveis } from "../../services/imovelApiService";
import ImovelCard from "../../components/ImovelCard";
import "./ImoveisPage.css";

function ImoveisPage() {
    const [listaImoveis, setListaImoveis] = useState([]);
    const history = useHistory();

    useEffect(()=> {
        getImoveis().then((data)=> {
            setListaImoveis(data);
        })
    }, []) // so executa uma vez o use effect.

    function irParaDetalhe(id) {
        history.push(`/imoveis/${id}`);
    }


    return (
        <div>
            <h1>Pagina de imoveis!</h1>
            {listaImoveis.map((item, i)=> 
            <div key={i} onClick={() => irParaDetalhe(item.id)} className="listaImoveis__imovelCard">
                <ImovelCard imovel={item} />
            </div>
            )}
        </div>
    )
}

export default ImoveisPage;