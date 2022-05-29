import React from 'react';
import './Body.css';
import TextField from './TextField.js';

export default class Body extends React.Component {
 
 
 render() {
    return (
     <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField id="outlined-basic" variant="outlined" fullWidth  label="Search"/>
      </div>
      </div>
    );
  }
}