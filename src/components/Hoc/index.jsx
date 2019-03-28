import React from 'react';

const hoc = (WrappedComponent, styles) => {
  return props => (
    <div className={styles}>
      <WrappedComponent {...props}/>
    </div>
  );
}

export default hoc;
