import { React, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Fila from "./Fila"
const axios = require('axios').default
function Listar(props) {
    const history = useHistory();
    const mandar = () => {
        history.push(`/view/${props.index}`)
    }
    const [carnet, setcarnet] = useState("")
    const [datos, setDatos] = useState([])
    const [loading, setloading] = useState(false)
    const refrezcar = async () => {
        //let datos = []

        if (carnet === "") {
            
                let res = await axios.get('http://localhost:4000/listar')
                    .then(function (response) {
                        // handle success
                        console.log(response.data);
                        setDatos(response.data)
                        setloading(true)
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
            

        } else {
            console.log('aaaaa')
            let res = await axios.get(`http://localhost:4000/listar/${carnet}`)
            setDatos(res.data)
        }
    }
    const castear = (fecha) => {
        var fechad = new Date(fecha)
        var dia = fechad.getDate()
        var mes = fechad.getMonth()
        var anio = fechad.getFullYear()
        return dia + "/" + mes + "/" + anio
    }
    useEffect(() => {
        const llamada = async () => {
            if (datos.length === 0) {
                await refrezcar()
            }
        }
        if (datos.length === 0) {
            llamada()
        }
    }, [])
    if (loading == false) {
        return (
            <div>
                <progress className="progress is-small is-primary" max={100}>15%</progress>
                <progress className="progress is-danger" max={100}>30%</progress>
                <progress className="progress is-medium is-dark" max={100}>45%</progress>
                <progress className="progress is-large is-info" max={100}>100%</progress>
            </div>

        )
    } else {
        return (
            <div className=" container mt-5">
                <div className="columns">
                    <div className="columns">
                        <div className="column is-three-quarteers">
                            <div className="container box mb-4">
                                <div className="field">
                                    <p className="control has-icons-left has-icons-right">
                                        <input className="input" type="search" placeholder="Carnet" onChange={e=> setcarnet(e.target.value)} />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope" />
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check" />
                                        </span>
                                    </p>
                                </div>

                                <div className="buttons" >
                                    <button className="button is-info is-medium is-fullwidth" onClick={refrezcar}>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column is-three-quarteers">
                        <div className="box">
                            <table className="table is-fullwidth">
                                <thead>
                                    <tr>
                                        <th><abbr title="Position">Pos</abbr></th>
                                        <th>Carnet</th>
                                        <th><abbr title="Played">Nombre</abbr></th>
                                        <th><abbr title="Won">Curso</abbr></th>
                                        <th><abbr title="Drawn">Mensaje</abbr></th>
                                        <th><abbr title="Lost">Ejecutado No.</abbr></th>
                                        <th><abbr title="Goals for">Fecha</abbr></th>
                                        <th><abbr title="Goals">Ver</abbr></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datos.map((c, index) => (
                                        <tr key={index}>
                                            <th>{index}</th>
                                            <td>{c.carnet}</td>
                                            <td>{c.nombre}</td>
                                            <td>{c.curso}</td>
                                            <td>{c.mensaje}</td>
                                            <td> {c.servidor} </td>
                                            <td>{castear(c.fecha)}</td>
                                            <Fila index={index} carnet={c.carnet} nombre={c.nombre}
                                                curso={c.curso}
                                                mensaje={c.mensaje}
                                                fecha={c.fecha}
                                                onClick={mandar}
                                                servidor={c.servidor}
                                            />
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>

            </div>
        )
    }

}

export default Listar
