import React from 'react';
import Navbar from './componentes/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './componentes/Paginas/Home'
import videos from './componentes/Paginas/videos'
import contacto from './componentes/Paginas/contacto'
import signup from './componentes/Paginas/signup'
import About from './componentes/Paginas/About';
import Galeria from './componentes/Paginas/Galeria';
import Instagram from './componentes/Paginas/Instagram';
import Webplayerr from './componentes/Paginas/Webplayerr';


function App() {
  return (
      <>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} ></Route>
              <Route path='/galeria' exact component={Galeria} ></Route>
              <Route path='/videos' exact component={videos} ></Route>
              <Route path='/contacto' exact component={contacto} ></Route>
              <Route path='/signup' exact component={signup} ></Route>
              <Route path='/about' exact component={About} ></Route>
              
              <Route path='/instagram' exact component={Instagram} ></Route>
              <Route path='/webplayerr' exact component={Webplayerr} ></Route>

            </Switch>
          </Router>
    </>
  );
}

export default App;
