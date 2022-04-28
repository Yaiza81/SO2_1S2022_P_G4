import React from 'react'
import { useHistory } from "react-router-dom";
function Fila(props) {
    console.log(props.data)
    const history = useHistory();
    const mandar = () => {
        history.push(`/vista/${props.index}/${props.carnet}/${props.nombre}/${props.mensaje}/${props.fecha}/${props.servidor}/${props.curso}`)
    }
    return (
            <td className="centered">
               <button className="button is-info is-light" onClick={mandar}>Info</button>
            </td>
    )
}

export default Fila