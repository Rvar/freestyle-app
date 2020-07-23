import React, { Component } from "react";

const writeJsonFile = require('write-json-file');

class BoiteAIdees extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: 'Please write an essay about your favorite DOM element.'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //Fonctionne pas (il faut utiliser async)
    //await writeJsonFile('./foo.json', {foo: true});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2> Boite à idées </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <br/>
            <textarea value={this.state.value} onChange={this.handleChange} />   
          </label> 
          <br/>    
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default BoiteAIdees;
