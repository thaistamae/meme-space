import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { GrStatusInfo } from "react-icons/gr";
import { GrHomeRounded } from "react-icons/gr";
import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";

export function Navbar() {
  return (
    <div className={style.navBar}>
      <div className={style.organize}>
        <div>
          <Link to="/">
            <img src={logo} className={style.logo} alt="" />
          </Link>
        </div>
        <div>
          <ul className={style.menu}>
            <li>
              <Link to="/">
                {" "}
                <GrHomeRounded size={25} />{" "}
              </Link>
            </li>
            <li>
              <Link to="/add-post">
                <GrAddCircle size={25} />
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <GrStatusInfo size={25} />
              </Link>
            </li>
          </ul>

          <div className={style.container}>
            <div className={style.list}>
              {/*<li> <Link to="/meme"> Memes</Link></li>
                                <li> <Link to="/meme/turma">Turma</Link> </li>
                                <li><Link to="/meme/externo">Externo</Link></li>*/}
            </div>
          </div>
        </div>
      </div>

      <div className={style.mainContainer}>
        {/*Colocar o conteudo para ficar no site aqui */}
      </div>
    </div>
  );
}
