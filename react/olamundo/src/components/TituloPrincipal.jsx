import React, {useState} from "react";
import {useEffect} from "react";

function TituloPrincipal(props) {
    const [titulo, setTitulo] = useState(props.titulo ?? "Ola Mundo");

    useEffect(()=>{
        console.log("titulo mudou");
    }, [titulo])

    function clickCallBack(event) {
        alert("Obrigado por ter clicado em mim")
    }

    function handleChangeTitle(event) {
        setTitulo(event.target.value)
    }

    return (
        <>
        <h1 onClick={clickCallBack}>{titulo}</h1>
        <input type="text" value={titulo} onChange={handleChangeTitle}/>
        </>
    )

};

export default TituloPrincipal;