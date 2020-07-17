import React, { Component } from "react";

class GenerateurCitation extends Component {

  constructor(props, context) {
      super(props, context);

      const data = require('./citations.json');
      const listItems = data.map((item) =>
        <div>
          {item.citation}
          <div> - {item.auteur}</div>
        </div>
      );

      this.state = {citation: "",
                    listItems: listItems}
    }

  pickACitation() {
    const max = this.state.listItems.length - 1;

    const rand = Math.floor(Math.random() * Math.floor(max))

    console.log("random : " + rand);

    this.setState({ citation: this.state.listItems[rand] });
  }

  render() {
    return (
      <div>
        <h2> GENERATEUR DE CITATION </h2>
        <h3>
          {this.state.citation}
        </h3>
        <a href="#" onClick={() => this.pickACitation()}>
          Générer
        </a>
      </div>
    );
  }
}

export default GenerateurCitation;
