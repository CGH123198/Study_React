import './App.css';
import Board from './content/Board';

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Game />     
    </div>
  );
}

export default App;
