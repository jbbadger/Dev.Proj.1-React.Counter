 import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  this.increment=this.increment.bind(this);
  this.decrement=this.decrement.bind(this);
  this.reset=this.reset.bind(this);
}

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({count: 0});
  }

    render(){
      return(
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.increment}>Add</button>
          <button onClick={this.decrement}>Sub</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      );
    }
}

export default Counter;
