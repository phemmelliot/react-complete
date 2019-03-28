import React, { Component } from 'react'
import classes from './CockPit.css';
import AuthContext from '../AuthContext'

// const cockPit = () =>{
//   return (
//     <div>
//       <h1>This is a react app</h1>
//       <AuthContext.Consumer>
//         {(context) => <button
//           className={classes['action-button']}
//           onClick={context.login}
//           >
//           {context.authenticated ? 'Log Out' : 'Log In'}
//         </button>
//         }
//       </AuthContext.Consumer>
//     </div>
//   );
// }

class CockPit extends Component {

  // This is the modern method of getting access to the context in react
  static contextType = AuthContext;

  componentDidMount() {
    console.log(this.context.authenticated);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Inside Component Did Update', this.context.authenticated)
  }

  render() {
    return (
      <div>
        <h1>This is a react app</h1>
        <AuthContext.Consumer>
          {(context) => <button
            className={classes['action-button']}
            onClick={context.login}
            >
            {context.authenticated ? 'Log Out' : 'Log In'}
          </button>
          }
        </AuthContext.Consumer>
      </div>
    );
  }
}

export default CockPit;
