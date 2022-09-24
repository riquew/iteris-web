import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { getImovelPorId } from "../../services/imovelApiService";
import ImovelCard from "../ImovelCard";
import Button from '@material-ui/core/Button';
import "./ImovelSinglePage.css"

function ImovelSinglePage() {
    const {id} = useParams();

    const [imovel, setImovel] = useState(null);

    useEffect(()=> {
        getImovelPorId(id).then((data)=> {
            setImovel(data);
        })
    }, [id]);

    if(!imovel) {
        return <div>Carregando...</div>
    } else {
        return (
            <div className="imovel">
                <ImovelCard imovel={imovel} />
                <div className="link">
                <Button variant="contained"><Link to='/imoveis'>Voltar</Link></Button>
                </div>
            </div>
        )
    }
}

export default ImovelSinglePage;