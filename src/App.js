import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';


const app = () => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: "Femi", age: 26, id: 'sdfswefdfw'},
      {name: "Shayo", age: 28, id: 'sdfswgjh'},
      {name: "Dotun", age: 22, id: 'sddbwedbd'},
      {name: "Priscilla", age: 24, id: 'dnfbnfsfw'}
    ]
  });

  const deletePerson = id => {
    const newPersons = personState.persons.filter(person => person.id !== id);
    setPersonState({
      persons: newPersons,
    });
  }

  const changePersonDetails = (event, id) => {
    if(event.target.id === "name"){
      return setPersonState({
        persons: personState.persons.map(person => 
          person.id === id ? {...person, name: event.target.value}: person)
      })
    }
    setPersonState({
      persons: personState.persons.map(person => 
        person.id === id ? {...person, age: event.target.value}: person) 
    })
  }

  return (
    <div className="App">
      <h1>This is a react app</h1>
      {personState.persons.map(person => (
        <Person 
          key={person.id}
          name={person.name}
          id={person.id}
          age={person.age}
          deletePerson={(id) => deletePerson(id)}
          handleChange={(event) => changePersonDetails(event, person.id)}
          />
      ))}
    </div>
  );
};

export default app;





// class App extends Component {
//   state = {
//     name: 'Femi',
//   }
//   onSubmit = () => {
//     const copiedState = this.state;
//     copiedState.name = 'Shayo';
//     console.log(this.state.name);
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <button onClick={this.onSubmit}>Click here</button>
//       </div>
//     );
//   }
// }
