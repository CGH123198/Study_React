import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScrollBox from './practice/ScrollBox.js'
import './App.css';


class App extends Component {
    render() {
      return (
      <div className="App">
        <ScrollBox ref={ (ref) => this.scrollBox=ref }/>
        <button onClick={ () => this.scrollBox.scrollToBottom() }>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
