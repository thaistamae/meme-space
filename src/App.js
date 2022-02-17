import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import EditCard from './pages/EditCard/EditCard';
import CommentCard from './components/CommentCard/CommentCard';
import Form from './components/Form/Form'

function App() {
  
return (
  <div>
  
    <Routes>
      <Route path='/' element={<Home />} />  
      <Route path="/editar-card/:id" element={<EditCard />} />
      <Route path="/add-comment/:id" element={<CommentCard />} />
      <Route path="/add-post" element={<Form />} />
    </Routes>

  
  </div>
  );
}

export default App;
