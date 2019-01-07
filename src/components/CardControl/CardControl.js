import React, { Component } from 'react';
import * as action from '../../actions/actions';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import './CardControl.css';

class cardControl extends Component {
  render() {
    let buttonSet = null;
    if (this.props.todo.status === 'starting') {
      buttonSet = <Aux>
        <button className="btnControl btn-danger" onClick={() => this.props.removeToDo(this.props.todo.id)}>delete</button>
        <button className="btnControl goRight btn-working" onClick={() => this.props.updateStatus(this.props.todo, 'working')}><strong>working</strong></button>
      </Aux>
    } else if (this.props.todo.status === 'working') {
      buttonSet = <Aux>
        <button className="btnControl btn-danger" onClick={() => this.props.removeToDo(this.props.todo.id)}>delete</button>
        <button className="btnControl btn-starting goRight" onClick={() => this.props.updateStatus(this.props.todo, 'starting')}>starting</button>
        <button className="btnControl buttonMargin btn-finish" onClick={() => this.props.updateStatus(this.props.todo, 'finish')}>finish</button>
      </Aux>
    } else if (this.props.todo.status === 'finish') {
      buttonSet = <Aux>
        <button className="btnControl btn-danger" onClick={() => this.props.removeToDo(this.props.todo.id)}>delete</button>
        <button className="btnControl goRight btn-working" onClick={() => this.props.updateStatus(this.props.todo, 'working')}>working</button>
      </Aux>
    }
    return (
      <div className="cardController">
        {buttonSet}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addingToDo: (todo) => {
      if (todo.name && todo.description && todo.deadline) {
        return dispatch(action.addToDo(todo))
      }
    },
    removeToDo: (id) => {
      return dispatch(action.removeToDo(id))
    },
    updateStatus: (todo, status) => {
      return dispatch(action.updateStatus(todo, status))
    }
  }
}

export default connect(null, mapDispatchToProps)(cardControl);