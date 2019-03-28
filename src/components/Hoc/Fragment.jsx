import React from 'react';

export const  Fragment = props => {
  console.log('Inside the childs render method')
  return (
  <div>
    {props.children}
  </div>
  );
}
