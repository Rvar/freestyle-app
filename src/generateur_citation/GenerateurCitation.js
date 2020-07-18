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
                    listItems: listItems,
                    indexCitation: 0}
    }

  pickACitation() {
    const max = this.state.listItems.length - 1;
    var rand = 0;

    //Je fais ça pour pas avoir 2 fois de suite la meme citation
    do {
      rand = Math.floor(Math.random() * Math.floor(max));
    } while (this.state.indexCitation === rand);

    console.log("MAX : " + max);
    
    this.setState({indexCitation: rand });
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
