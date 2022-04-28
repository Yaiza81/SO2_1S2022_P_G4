import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Agregar from './components/Agregar'
import Listar from './components/Listar'
import Vista from './components/Vista'
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/agregar" component={Agregar} />
        <Route path="/listado" component={Listar}/>
        <Route path="/vista/:id/:carnet/:nombre/:mensaje/:fecha/:servidor/:curso" component={Vista}/>
      </Router>

      <div class="card-content">
        <div class="content">
          <h1 class="card-footer-item"> ¡¡Calificación SO2!! </h1>
        </div>  

        <div class="level-item has-text-centered">
          <div>
            <p class="title">Grupo</p>
            <p class="title">4</p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App
