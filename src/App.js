import React, { Component } from 'react';

class App extends Component {

  add1(){
    this.props.onAdd1()
  }
  add2() {
    this.props.onAdd2()
  }
  add3() {
    this.props.onAdd3()
  }
  add4() {
    this.props.onAdd4()
  }
  render() {
    return (
      <div>
        你点击了<span>{this.props.value}</span>次
        <button id="add1" onClick={()=> this.add1()}>+1</button>
        <button id="add2" onClick={()=> this.add2()}>+2</button>
        <button id="minsu1">-1</button>
        <button id="add1IfOdd" onClick={()=> this.add3()}>oddnumber+1</button>
        <button id="add1Ifansyc" onClick={()=> this.add4()}>asnyc+1</button>
      </div>
    );
  }
}

export default App;
