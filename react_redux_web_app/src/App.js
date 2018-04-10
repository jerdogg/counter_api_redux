import React, { Component } from 'react';
import Counter from './components/myCounter';
// import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        <h3 className="App-title">Redux Example</h3>
        <hr />
        <Counter />
      </div>
    );
  }
}

export default App;