import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import CommentCard from './components/CommentCard/CommentCard';
import Form from './components/Form/Form'
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  
return (
  <div>
  
    <Routes>
      <Route path='/' element={<Home />} />  
      <Route path="/add-comment/:id" element={<CommentCard />} />
      <Route path="/add-post" element={<Form />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>

  
  </div>
  );
}

export default App;