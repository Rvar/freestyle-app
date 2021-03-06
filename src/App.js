import React, { Component } from 'react';
import './App.css';
import Home from './home/Home';
import GenerateurCitation from './generateur_citation/GenerateurCitation';
import BoiteAIdee from './boite_a_idees/BoiteAIdees';
import TodoList from './todo_list/TodoList';
import FetchDataFromApi from './fetch_data_from_api/fetchDataFromApi.js';
import MapStuff from './map_stuff/mapStuff.js';
//!!!!!!!!!!!!!!
//AJOUTER IMPORT
//!!!!!!!!!!!!!!
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*const DATATODO = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Rupture", completed: false },
  { id: "todo-2", name: "Evenement", completed: false }
];*/


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
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
                 <Link to="/boiteAIdee">Boite à idées</Link>
               </li>
               <li>
                 <Link to="/todoList">Todo list</Link>
               </li>
               <li>
                 <Link to="/fetchDataFromApi">Fetch Data From API</Link>
               </li>
               <li>
                 <Link to="/mapStuff">Map stuff</Link>
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
             <Route path="/boiteAIdee">
               <BoiteAIdee />
             </Route>
             <Route path="/todoList">
               <TodoList /*tasks={DATATODO}*//>
             </Route>
             <Route path="/fetchDataFromApi">
               <FetchDataFromApi />
             </Route>
             <Route path="/mapStuff">
               <MapStuff />
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
}


export default App;
