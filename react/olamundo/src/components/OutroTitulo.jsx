import React, {Component} from "react";

class OutroTitulo extends Component {
    render() {
        let titulo = "Ola, componente de classe!"
    if(this.props.titulo) {
        titulo = this.props.titulo;
    }

        return <h1>{titulo}</h1>
    }
}

export default OutroTitulo;