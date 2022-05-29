import React, { Component } from 'react';
import Table from './Table1';

import Body from './Body';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  

  renderBody(){
    return (<Body/>);
  }

  renderTable(){
    return (<Table/>);
  }
  render() {
    return (
      <div className="App">
        <div></div>
        {this.renderBody()}
      
      </div>
    );
  }
}

export default App;
