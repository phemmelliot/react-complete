import React, { useState, Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons';
import CockPit from '../components/CockPit'
import AuthContext from '../components/AuthContext';

class App extends Component {
  state = {
    persons: [
      {name: "Femi", age: 26, id: 'sdfswefdfw'},
      {name: "Shayo", age: 28, id: 'sdfswgjh'},
      {name: "Dotun", age: 22, id: 'sddbwedbd'},
      {name: "Priscilla", age: 24, id: 'dnfbnfsfw'}
    ],
    authenticated: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Inside getDerivedState");
    return state;
  }

  componentDidMount() {
    // this.inputElementRef.current.focus();
    console.log("Inside componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Inside Component did update");
  }

  authenticateUser = () => {
    this.setState((prevState, props) => ({
      authenticated: !prevState.authenticated,
    }))
  }

  deletePerson = id => {
    const newPersons = this.state.persons.filter(person => person.id !== id);
    this.setState({
      persons: newPersons,
    });
  }

  changePersonDetails = (event, id) => {
    this.setState({
      persons: this.state.persons.map(person => 
        person.id === id ? {...person, [`${event.target.id}`]: event.target.value}: person) 
    })
  }
  render() {
    return (
      <div className={classes.App}>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.authenticateUser
        }}> 
           <div>
             <CockPit />
             <Persons 
               persons={this.state.persons}
               deletePerson={(id) => this.deletePerson(id)}
               changePersonDetails={(event, id) => this.changePersonDetails(event, id)}
               />
          </div>
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;

// const app = () => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       {name: "Femi", age: 26, id: 'sdfswefdfw'},
//       {name: "Shayo", age: 28, id: 'sdfswgjh'},
//       {name: "Dotun", age: 22, id: 'sddbwedbd'},
//       {name: "Priscilla", age: 24, id: 'dnfbnfsfw'}
//     ]
//   });

//   const deletePerson = id => {
//     const newPersons = personState.persons.filter(person => person.id !== id);
//     setPersonState({
//       persons: newPersons,
//     });
//   }

//   const changePersonDetails = (event, id) => {
//     setPersonState({
//       persons: personState.persons.map(person => 
//         person.id === id ? {...person, [`${event.target.id}`]: event.target.value}: person) 
//     })
//   }

//   return (
//     <div className={classes.App}>
//       <h1>This is a react app</h1>
//       {personState.persons.map(person => (
//         <Person 
//           key={person.id}
//           name={person.name}
//           id={person.id}
//           age={person.age}
//           deletePerson={(id) => deletePerson(id)}
//           handleChange={(event) => changePersonDetails(event, person.id)}
//           />
//       ))}
//     </div>
//   );
// };
