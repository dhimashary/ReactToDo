import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import './MainContent.css';
import { Route, NavLink } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import TaskContainer from '../TaskContainer/TaskContainer';

class mainContent extends Component {
  render() {
    return (
      <Aux>
        <header>
          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/" >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/add' exact>
                  Add ToDo
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="bg-azure">
          <div className="container">
            <Route path="/add" exact component={FormInput} />
            <Route path="/" render={
              () => <div className="ToDoContent">
                <TaskContainer status="starting" todo={this.props.startingToDo} />
                <TaskContainer status="working" todo={this.props.workingToDo} />
                <TaskContainer status="finish" todo={this.props.finishToDo} />
              </div>
            } />
          </div>
        </div>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    startingToDo: state.startingToDoList,
    workingToDo: state.workingToDoList,
    finishToDo: state.finishToDoList
  }
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(mainContent);
