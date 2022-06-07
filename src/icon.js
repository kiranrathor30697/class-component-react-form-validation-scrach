import React, { Component } from 'react';
import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
  const element = <FontAwesomeIcon icon={faCoffee} />


export default class icon extends Component {
  render() {
    return (
      <div>
        {element}
      </div>
    );
  }
}


 
  