import React from 'react';

export default props => (
  <li>
    <a href={props.path}>
      <li className={`fa fa-${props.icon}`}></li> {props.label}
    </a>
  </li>
);