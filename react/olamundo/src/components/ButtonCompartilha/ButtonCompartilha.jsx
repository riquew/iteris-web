import React, {useState} from "react";
import "./ButtonCompartilha.css";

/**
 * 
 * @param {{post :ButtonModel}} props 
 * @returns
 */


function ButtonCompartilha(props){
    const [countCompartilha, setCountCompartilha] = useState(null);
    const [frase, setNovaFrase] = useState(null);
    
    function clickCallBack(event) {
        setCountCompartilha(countCompartilha + 1);
        if(countCompartilha > -1) {
            setNovaFrase('VEZES COMPARTILHADO: ')
        }
    }
    
    return(
        <div>
            <button className="botaoCompartilha" onClick={clickCallBack}> COMPARTILHE AQUI!
                <p>{frase}{countCompartilha}</p>
            </button>
        </div>
    );
};


export default ButtonCompartilha;