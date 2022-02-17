import { Route, Routes } from 'react-router-dom';
import './App.css'
import CommentCard from './components/CommentCard/CommentCard';
import Form from './components/Form/Form'
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  
return (
  <div>
  
    <Routes>
      <Route path='/' element={<CommentCard />} />  
      {/*<Route path="/add-comment" element={<CommentCard />} />*/}
      <Route path="/add-post" element={<Form />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>

  
  </div>
  );
}

export default App;