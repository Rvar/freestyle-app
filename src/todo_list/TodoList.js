import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";
import './todoList.css';

function TodoList(props) {

  const [tasks, setTasks] = useState([]);

  const taskList = tasks.map(task => (
      <Todo
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.id}
        />
      )
    );

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    function addTask(name) {
      const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
      setTasks([...tasks, newTask]);
    }

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
          {headingText}
        </h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    );

}


export default TodoList;
