import { Link } from "react-router-dom";
import {useState} from "react"
import {Form} from '../Form/Form'
import { MdOutlineAddBox } from 'react-icons/md';
import styles from "./Style/Navbar.css"

function Navbar() {

    const [isFormVisible, setisFormVisible] = useState(false)
  
    return (
      <>
  
  <section className={styles.app}>
  <aside className={styles.sidebar}>
         <header>
        Menu
      </header>
    <nav className={styles.sidebarNav}>
 
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li> <button className="addButton" onClick={() => setisFormVisible(true)}><MdOutlineAddBox className="addButton"/></button>        
      {isFormVisible ? <Form closeForm={setisFormVisible}/> : null}</li>
        
        <li> <Link to="/meme"> Memes</Link></li>
        <li> <Link to="/meme/turma">Turma</Link> </li>
        <li><Link to="/meme/externo">Externo</Link></li>
      </ul>
    </nav>
  </aside>
</section>
  
  
      </>
    );
  }

  export {Navbar}