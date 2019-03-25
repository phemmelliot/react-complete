import React from 'react';
import './Person.css';

const person = props => (
  <div className="person">
    <h1>My name is {props.name} and my age is {props.age}</h1>
    <div className="action-box">
      <input
        id="name"
        className="input-box" 
        placeholder="Input name"
        onChange={props.handleChange}
        value={props.name}
        />
      <input 
        id="age"
        className="input-box" 
        placeholder="Input age"
        onChange={props.handleChange}
        value={props.age}
        />
    </div>
    <button 
      className="action-button"
      onClick={props.deletePerson.bind(this, props.id)}>
      Delete person
    </button>
  </div>
);

export default person;


