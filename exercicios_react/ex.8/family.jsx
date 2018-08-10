import React from 'react';
import { childrenWithProps } from '../utils/reactUtils';

export default props => (
  <div>
    <h4>Família</h4>
    { childrenWithProps(props.children, props) }
  </div>
)
