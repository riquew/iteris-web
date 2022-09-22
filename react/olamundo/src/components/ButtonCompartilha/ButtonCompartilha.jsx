import React, {useState} from "react";
import "./ButtonCompartilha.css";


function ButtonCompartilha(props){
    const [countCompartilha, setCountCompartilha] = useState(null);
    const [frase, setNovaFrase] = useState('');
    

    function clickCallBack(event) {
        setCountCompartilha(countCompartilha + 1);
        if(countCompartilha > -1) {
            setNovaFrase('VEZES COMPARTILHADO: ')
        }
    }
    
    return(
        <div>
            <button className="botaoCompartilha" onClick={clickCallBack}>COMPARTILHE AQUI!
                <p>{frase}{countCompartilha}</p>
            </button>
        </div>
    );
};


export default ButtonCompartilha;