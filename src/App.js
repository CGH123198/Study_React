import PropTypes from 'prop-types';
import { Component } from 'react';
import Say from './Say.js';
import Counter from './Counter.js';
import './App.css';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello, My name is {name}. <br />
        The value of children is {children}. <br />
        My favoriteNumber is {favoriteNumber}.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: '기본 이름',
  favoriteNumber: 11
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      <MyComponent>리액트</MyComponent>
      <Counter />
      <Say />
    </div>
  );
}

export default App;
