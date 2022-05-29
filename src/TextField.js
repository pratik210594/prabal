import React from 'react';
import axios from 'axios';
import Table from './Table1';
export default class TextField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value:this.state, data:['']};
    this.handleChange = this.handleChange.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

 handleChange(event){
console.log(event.target.value);

  
  axios.get('http://hn.algolia.com/api/v1/search?query='+event.target.value+'&tags=story&hitsPerPage=500').then
  ((response)=>{this.setState({data:response.data.hits});/*console.log(this.state.data);*/});
 } 

 renderTable(data){
  console.log("called");
  return(
   
  <Table data={data}/>
  );
 }
  
  
  render() {
    return (
      <div className='bar'>
       <input type="text" value={this.state.value} onChange={this.handleChange}></input>
       
       <Table id="check" data={this.state.data}/>
       </div>
    );
  }
}