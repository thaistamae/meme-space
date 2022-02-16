import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import EditCard from './pages/EditCard/EditCard';

function App() {
  
return (
  <Routes>
     <Route path='/' element={<Home />} />  
     <Route path="/editar-card/:id" element={<EditCard />} />
  </Routes>

  );
}

export default App;
