import React, { Component } from "react";
import axios from 'axios';

class FetchDataFromApi extends Component {

  state = {
    persons: [],
    fontaines: [],
    posts: []
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

      axios.get(`https://my-json-server.typicode.com/rvar/freestyle-app/posts`)
        .then(res => {
          this.setState({ posts: res.data });
        });
    }



    render() {
      return (
        <div>
          <h3> Fetch data with axios from : jsonplaceholder.typicode.com/</h3>
          <ul>
            {this.state.persons.map(person => <li>{person.name}</li>)}
          </ul>
          <h3>Fontaines de Paris</h3>
          <ul>
            {this.state.fontaines.map(fontaine => <li>{fontaine.fields.voie}</li>)}
          </ul>
          <h3>Posts from jsonServer</h3>
          <ul>
            {this.state.posts.map(post => <li>{post.title}</li>)}
          </ul>
        </div>
      );
  }
}

export default FetchDataFromApi;
