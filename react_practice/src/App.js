import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LifeCycleSample from './practice/LifeCycleSample.js';
import ErrorBoundary from './practice/ErrorBoundary.js';
import './App.css';

function getRandomColor() {
   return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


class App extends Component {
  state ={
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

    render() {
      return (
      <div className="App">
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
