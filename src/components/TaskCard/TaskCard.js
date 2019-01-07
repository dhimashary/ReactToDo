import React from 'react';
import './TaskCard.css'
import CardControl from '../CardControl/CardControl';

const taskCard = (props) => {
  return (
    <div className="taskCard">
      <h2>{props.todo.name}</h2>
      <p>deadline: {props.todo.deadline}</p>
      <p>{props.todo.description}</p>
      <CardControl todo={props.todo}/>
    </div>
  )
}

export default taskCard;