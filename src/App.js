import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MenuHeader from './components/MenuHeader';

function App() {
  return (
    <div>
      <MenuHeader />
      <Routes>
        <Route path='/'  element={ <Home /> }/>
      </Routes>
    </div>
  );
}

export default App;
