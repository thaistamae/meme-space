import { Link } from "react-router-dom";
import {useState} from "react"
import Form from '../Form/Form'
import { MdOutlineAddBox } from 'react-icons/md';
import style from "../Navbar/Navbar.module.css"


function Navbar() {

    const [isFormVisible, setisFormVisible] = useState(false)
  
    return (
                <div className={style.wrapper}>
                
                    <div className={style.topNavbar}>
                        <div className={style.hamburger}></div>

                        <div className={style.topMenu}>
                            <div className={style.logo}></div>

                             <ul>
                                 <li><Link to="/"> <i className="fas fa-search"></i></Link></li>
                                 <li><Link to="/"> <i className="fas fa-user"></i></Link></li>
                             </ul>
                        </div>
                    </div>
                    
                    <div className={style.sidebar}>
                        <ul>
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/add-post"> Add New Posty <button className="addButton" onClick={() => setisFormVisible(true)}><MdOutlineAddBox className="addButton"/></button>        
                            {isFormVisible ? <Form closeForm={setisFormVisible}/> : null}</Link></li>  
                        </ul>
                      
                        <div className={style.container}>  
                    
                            <input type="checkbox" name="" id="" className="btn"/>  
                            <div className={style.list}>  
                                <li> <Link to="/meme"> Memes</Link></li>
                                <li> <Link to="/meme/turma">Turma</Link> </li>
                                <li><Link to="/meme/externo">Externo</Link></li>
                            </div>  
                        </div>  
                    </div>    
                
                   <div className={style.mainContainer}> 
                   
                   
                   
                   
                   {/*Colocar o conteudo para ficar no site aqui */}</div> 
                </div>
    );
  }

  export {Navbar}