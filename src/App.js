import React from 'react';
import './App.css';
import Home from './home/Home';
import GenerateurCitation from './generateur_citation/GenerateurCitation'
//!!!!!!!!!!!!!!
//AJOUTER IMPORT
//!!!!!!!!!!!!!!
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="menu">
        <div>
          <header className="App-header">
            <h5>
              <Link to="/">FREESTYLE - APP</Link>
            </h5>
          </header>
           <ul>
             <li>
               <Link to="/generateurCitation">Générateur de citation</Link>
             </li>
             <li>
               <Link to="/">autre</Link>
             </li>
           </ul>
         </div>
      </div>
      <div className="body">
         <Switch>
           //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
           //AJOUTER ROUTE ET LINK : Link to... (au dessus)
           //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
           <Route path="/generateurCitation">
             <GenerateurCitation />
           </Route>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
       </div>
      </Router>
    </div>
  );
}


export default App;
