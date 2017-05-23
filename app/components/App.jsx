import React from 'react';
import store from '../store';
import * as actions from '../actions/calculator-actions';

var styles = {
  margin: "5px"
}

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      x: null,
      y: null
    }
  }

  handleChange(e) {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  calculate(event) {
    console.log(event);
    console.log(this.state);
    store.dispatch(actions.add(this.state.x, this.state.y));
  };

  render() {
    return (
      <div>
        <input type="text" name="x" onChange={(event) => this.handleChange(event)} style={styles} />
        +
        <input type="text" name="y" onChange={(event) => this.handleChange(event)} style={styles} />
        = <span>{ this.state.result }</span>
        <br /><br />
        <button className="square" onClick={(event) => this.calculate(event)}>
          Calculate
        </button>
      </div>
    );
  }
}

export default App;