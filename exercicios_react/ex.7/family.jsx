import React from 'react';

export default props => (
  <div>
    <h4>Família</h4>
    { React.cloneElement(props.children, {...props}) }
  </div>
)
