import {useState} from "react"
import {Form} from './components/Form'
import { MdOutlineAddBox } from 'react-icons/md';
import './App.css'


function App() {
  const [isFormVisible, setisFormVisible] = useState(false)

  return (
    <div>

      <button className="addButton" onClick={() => setisFormVisible(true)}><MdOutlineAddBox className="addButton"/></button>        
      {isFormVisible ? <Form closeForm={setisFormVisible}/> : null}


    </div>
  );
}

export default App;
