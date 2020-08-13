import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
      this.props.addTask("Say hello!");
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
      );
  }
}

export default Form;
