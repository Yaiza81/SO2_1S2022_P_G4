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
    </div>
  )
}

export default App
