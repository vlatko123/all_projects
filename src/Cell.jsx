import React from 'react';
import './App.css';

class Cell extends React.Component{
    constructor(props){
      super(props);
      this.state = {cellStyle:'normalCell'};
      this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(){
      var css = (this.state.cellStyle === 'largeCell') ? 'normalCell' : 'largeCell';
      this.setState({cellStyle:css})
    }
    
    render(){
      return (
        <div onClick={this.clickHandler} className = {'cell ' + this.props.groupBlock.replace(/ /g,'') + ' ' +this.state.cellStyle}>
          <div className = "name">{this.props.name}</div>
          <div className = "atomicNumber">{this.props.number}</div>
          <div className = "symbol">{this.props.symbol}</div>
          <div className = "standardState">{this.props.standardState}</div>
          <div className = "yearDiscovered">{this.props.yearDiscovered}</div>
        </div>
      )
    }
  }
  export default Cell;