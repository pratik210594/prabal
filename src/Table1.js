import React from 'react';


export default class Table1 extends React.Component {

  render() {
    return (
      <div>
        {this.props.data.map(res=><h2>{res['title']}</h2>)}
       </div>
    );
  }
}