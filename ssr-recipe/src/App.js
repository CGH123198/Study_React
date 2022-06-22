import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Menu />} >
          <Route path="/red" element={<RedPage />} />
          <Route path="/blue" element={<BluePage />} />
        </Route>
      </Routes>
  );
}

export default App;
