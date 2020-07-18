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
    
    this.setState({indexCitation: this.state.indexCitation + 1 });

    if(this.state.indexCitation == (this.state.listItems.length - 1)) {
      this.setState({indexCitation: 0 });
    }

    this.setState({ citation: this.state.listItems[this.state.indexCitation] });
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
