import React from 'react';
import './Body.css';
import TextField from './TextField.js';
import axios from 'axios';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.state};
    this.handleChange = this.handleChange.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    
    axios.get('http://hn.algolia.com/api/v1/search?query='+event.target.value+'&tags=story').then((response)=>{this.state.value=response.data});
      
     } 
 
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