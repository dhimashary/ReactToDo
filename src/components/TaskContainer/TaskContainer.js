import './TaskContainer.css';
import React, { Component } from 'react';
import TaskCard from '../TaskCard/TaskCard';

class TaskContainer extends Component {
  render() {
    let taskList = null
    if (this.props.todo.length > 0) {
      taskList = this.props.todo.map((val, index) => <TaskCard todo={val} key={index} />)
    }
    let additionalClasses = ''
    if(this.props.status === "working") {
      additionalClasses = 'working'
    } else if (this.props.status === 'finish') {
      additionalClasses = 'finish'
    }

    return (
      <div className={"TodoList " + additionalClasses} >
        <h1 className="centered">{this.props.status}</h1>
        <div className="TodoContainer">
          {taskList}
        </div>
      </div>
    );
  }
}

export default TaskContainer;