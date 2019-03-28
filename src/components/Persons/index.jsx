import React from 'react'
import Person from '../Person'

const Persons = props => {
  return (
     props.persons.map(person => (
      <Person 
        key={person.id}
        name={person.name}
        id={person.id}
        age={person.age}
        deletePerson={(id) => props.deletePerson(id)}
        handleChange={(event) => props.changePersonDetails(event, person.id)}
        />
    ))
  )
}

export default Persons;
