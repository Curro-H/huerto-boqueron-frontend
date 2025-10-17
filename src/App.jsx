import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Calendario from './pages/Calendario';
import Cultivos from './pages/Cultivos';
import Bancales from './pages/Bancales';
import Tareas from './pages/Tareas';
import Registros from './pages/Registros';
import Aromaticas from './pages/Aromaticas';

export default function App() {
  return (
    <HashRouter>
      <nav style={{display: 'flex', gap: 10, marginBottom: 20}}>
        <Link to='/'>Dashboard</Link>
        <Link to='/calendario'>Calendario</Link>
        <Link to='/cultivos'>Cultivos</Link>
        <Link to='/bancales'>Bancales</Link>
        <Link to='/tareas'>Tareas</Link>
import Registros from './pages/Registros';
import Aromaticas from './pages/Aromaticas';
      </nav>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/calendario' element={<Calendario />} />
        <Route path='/cultivos' element={<Cultivos />} />
        <Route path='/bancales' element={<Bancales />} />
        <Route path='/tareas' element={<Tareas />} />
import Registros from './pages/Registros';
import Aromaticas from './pages/Aromaticas';
      </Routes>
    </HashRouter>
  );
}

