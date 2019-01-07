import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FormInput.css';
import * as action from '../../actions/actions';

class formInput extends Component {
  state = {
    toDo: {
      name: '',
      description: '',
      deadline: '',
      status: 'starting'
    }
  }


  inputNameHandler = (event) => {
    let todo = {
      ...this.state.toDo
    }
    todo.name = event.target.value
    return this.setState({
      toDo: todo
    })
  }

  inputDescriptionHandler = (event) => {
    let todo = {
      ...this.state.toDo
    }
    todo.description = event.target.value
    return this.setState({
      toDo: todo
    })
  }

  inputDeadlineHandler = (event) => {
    let todo = {
      ...this.state.toDo
    }
    todo.deadline = event.target.value
    return this.setState({
      toDo: todo
    })
  }

  resetForm = () => {
    this.setState({
      toDo: {
        name: '',
        description: '',
        deadline: '',
        status: 'starting'
      }
    })
  }

  render() {
    return (
      <form className="FormControl">
        <label>Task Name</label>
        <input value={this.state.toDo.name} onChange={(event) => this.inputNameHandler(event)} type="input"></input>
        <label>Task Description</label>
        <textarea value={this.state.toDo.description} onChange={(event) => this.inputDescriptionHandler(event)} rows="5"></textarea>
        <label>Task Deadline</label>
        <input value={this.state.toDo.deadline} type="date" onChange={(event) => this.inputDeadlineHandler(event)}></input>
        <button onClick={(event) => {
          event.preventDefault()
          this.props.addingToDo(this.state.toDo)
          this.resetForm()
        }
        }
          type="submit"
          className="button-custom">
          submit
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addingToDo: (todo) => {
      if (todo.name && todo.description && todo.deadline) {
        return dispatch(action.addToDo(todo))
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(formInput);