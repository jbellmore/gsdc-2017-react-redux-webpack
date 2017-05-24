import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/calculator-actions';

var styles = {
  margin: "5px"
}

class AppComponent extends React.Component {

  constructor() {
    super();

    if(this.state == null) {
      this.state = {
        x: null,
        y: null
      }
    }
  }

  componentWillReceiveProps(props) {
    this.state = props.state;
  }

  handleChange(e) {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  calculate(event) {
    console.log(event);
    console.log(this.state);
    this.props.add(this.state.x, this.state.y);
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

// Map the portion of the state (from the redux store) that this component cares about 
// to the "props" object so the component has access to the data is needs and will be
// automatically updated whenever the store is updated.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
const mapStateToProps = (state) => ({
  state: state.calculator
});

// Map the dispatch and bind the action creators to the "props" object of the component
// See: http://redux.js.org/docs/api/bindActionCreators.html
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    actions,
    dispatch
  );
}

// Use connect function to wrap the component so that it will receive updates from redux store
// and so that is has the dispatch function provided directly to the component.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;