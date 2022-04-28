import React from 'react'

function Vista(props) {
    let { curso, nombre, fecha, mensaje, servidor, carnet } = props.match.params
    return (
        <div className=" container mt-4">
            <div className="columns">
                <div className="column is-three-quarteers">
                    <div className="box">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Curso de   {curso}
                                </p>

                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{nombre}</li>
                                        <li className="list-group-item">{carnet}</li>
                                        <li className="list-group-item">No: {servidor}</li>
                                    </ul>
                                    {mensaje}
                                    <br></br>
                                    <br></br>
                                    <br></br>

                                </div>
                            </div>
                            <footer className="card-footer">
                                <p className="card-text"><small class="text-muted">
                                    Fecha:
                                    <time dateTime="2016-1-1"> {new Date(fecha).getFullYear()}-{new Date(fecha).getMonth()}-{new Date(fecha).getDay()} </time>
                                </small></p>
                                <p className="card-text"><small class="text-muted">
                                     -------Hora:
                                    <time dateTime="2016-1-1">{new Date(fecha).getHours()}:{new Date(fecha).getMinutes()}</time>
                                </small></p>
                            </footer>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vista
