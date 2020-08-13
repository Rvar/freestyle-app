import React, { Component } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import './todoList.css';


function addTask(name) {
  alert(name);
}


class TodoList extends Component {

  constructor(props) {
    super(props);

    this.taskList = props.tasks.map(task =>
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />);
  }

  render() {
    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
          <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <h2 id="list-heading">
          3 tasks remaining
        </h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {this.taskList}
        </ul>
      </div>
    );
  }
}


export default TodoList;
