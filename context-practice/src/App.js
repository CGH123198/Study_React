import ColorBox from './components/ColorBox';
import { ColorProvider } from './context/color';
import SelectColors from './components/SelectColors';

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
