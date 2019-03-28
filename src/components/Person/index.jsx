import React, { useEffect, useRef, useContext } from 'react';
import classes from './Person.css';
import hoc from '../Hoc';
import { Fragment } from '../Hoc/Fragment';
import AuthContext from '../AuthContext'

const person = props => {
  const btnRef = useRef(null);
  const inputRef = useRef(null)
  
  // This is meant to demonstrate how to use the mordern context using react hook
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("This is meant to mimick componentDidMount", authContext.authenticated)
    inputRef.current.focus();
  }, [])

  // useEffect(() => {
  //   console.log("This is meant to mimick componentDidUpdate")
  // }, [props])
  
  return (
     <Fragment>
      <h1>My name is {props.name} and my age is {props.age}</h1>
      {/* This is still using the old AuthContext.Consumer, authContext.authenticated could have been used instead */}
      <AuthContext.Consumer>
        {(context) => <h1 className={classes.auth}>{context.authenticated ? 'Authenticated' : 'Please Log In'}</h1>}
      </AuthContext.Consumer>
      <div className={classes['action-box']}>
        <input
          id="name"
          ref={inputRef}
          className={classes['input-box']}
          placeholder="Input name"
          onChange={props.handleChange}
          value={props.name}
          />
        <input 
          id="age"
          className={classes['input-box']}
          placeholder="Input age"
          onChange={props.handleChange}
          value={props.age}
          />
      </div>
      <button 
        ref={btnRef}
        className={classes['action-button']}
        onClick={props.deletePerson.bind(this, props.id)}>
        Delete person
      </button>
    </Fragment>
  );
}

export default React.memo(hoc(person, classes.person));


