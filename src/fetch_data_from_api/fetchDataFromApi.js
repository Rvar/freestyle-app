import React, { Component } from "react";
import axios from 'axios';

class FetchDataFromApi extends Component {

  state = {
    persons: [],
    fontaines: []
  }

  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons: persons });
        });

      axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=fontaines-a-boire&q=&facet=type_objet&facet=modele&facet=commune&facet=dispo`)
        .then(res => {
          this.setState({ fontaines: res.data.records });
        });
    }



    render() {
      return (
        <div>
          <h2> Fetch data with axios from : jsonplaceholder.typicode.com/</h2>
          <ul>
            {this.state.persons.map(person => <li>{person.name}</li>)}
          </ul>
          <h3>Fontaines de Paris</h3>
          <ul>
            {this.state.fontaines.map(fontaine => <li>{fontaine.fields.voie}</li>)}
          </ul>
        </div>
      );
  }
}

export default FetchDataFromApi;
