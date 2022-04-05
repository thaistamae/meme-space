import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { GrStatusInfo } from "react-icons/gr";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";
import { ShareButton } from "../ShareButton/ShareButton";
import { useState } from "react";

export function Navbar() {
  const [shareButton, setShareButton] = useState(false);

  function appearDropDownList() {
    if (shareButton == false) {
      setShareButton(true);
    } else {
      setShareButton(false);
    }
  }

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
            <li>
              <button onClick={appearDropDownList}>
                <AiOutlineUsergroupAdd size={25} />
              </button>
              <div >{shareButton ? <ShareButton/> : null}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
