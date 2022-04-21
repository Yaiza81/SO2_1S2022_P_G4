import { React, useState } from 'react'
require('dotenv').config()
const axios = require('axios').default
function Agregar() {
    const [nombre, setnombre] = useState("")
    const [carnet, setCarnet] = useState("")
    const [curso, setcurso] = useState("")
    const [mensaje, setmensaje] = useState("")

    const funcion = async () => {
        let json = {
            nombre,
            carnet,
            curso,
            mensaje
        }
        //let servidor=process.env.BACKEND||'ngnix'
        const respuesta=await axios.post(`http://localhost:4000/agregar`,json)
        alert(respuesta.data.msg)
    }
    return (
        <div className=" container mt-4">
            <div className="columns">
                <div className="column is-three-quarteers">
                    <div className="box">
                        <div className="field">
                            <label className="label">Nombre</label>
                            <div className="control">
                                <input className="input" onChange={e => setnombre(e.target.value)} type="text" placeholder="Text input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Carnet</label>
                            <div className="control">
                                <input className="input" type="text" onChange={e => setCarnet(e.target.value)} placeholder="Text input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Curso</label>
                            <div className="control">
                                <input className="input" type="text" onChange={e => setcurso(e.target.value)} placeholder="Text input" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Textarea" defaultValue={""} onChange={e => setmensaje(e.target.value)} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="columns">
                <div className="column is-2">
                    <div className="container box mb-4">
                        <div className="buttons" >
                            <button className="button is-info is-medium is-fullwidth" onClick={funcion}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agregar
