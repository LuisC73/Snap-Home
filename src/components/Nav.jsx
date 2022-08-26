import React,{useState} from "react";
import { GoChevronDown, GoChevronUp, GoThreeBars,GoX } from "react-icons/go";
import images from "../helpers/images";

function Nav() {
  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <img src={images.logo} alt="Logo Snap" className="nav__img" />
        </div>
        <div className={`nav__content ${menu ? "nav__content--active" : ""}`}>
          <GoX className="nav__close" onClick={() => setMenu(!menu)}/>
        <ul className="nav__ul">
          <li className="nav__li  nav__li--down" onClick={() => setDropDown(!dropDown)}>
            <a href="#" className="nav__a">
              Features {dropDown ? <GoChevronUp className="nav__icon" /> : <GoChevronDown className="nav__icon" /> }
            </a>
            <ul className={`nav__dropdown ${dropDown ? "nav__dropdown--active" : ""}`}>
              <li className="nav__li nav__li--drop">
                <img
                  src={images.list}
                  alt="Todo List"
                  className="nav__icon nav__icon--drop"
                />
                <a href="#" className="nav__a nav__a--drop">
                  Todo List
                </a>
              </li>
              <li className="nav__li nav__li--drop">
                <img
                  src={images.calendar}
                  alt="Calendar"
                  className="nav__icon nav__icon--drop"
                />
                <a href="#" className="nav__a nav__a--drop">
                  Calendar
                </a>
              </li>
              <li className="nav__li nav__li--drop">
                <img
                  src={images.reminders}
                  alt="Reminders"
                  className="nav__icon nav__icon--drop"
                />
                <a href="#" className="nav__a nav__a--drop">
                  Reminders
                </a>
              </li>
              <li className="nav__li nav__li--drop">
                <img
                  src={images.clock}
                  alt="Planning"
                  className="nav__icon nav__icon--drop"
                />
                <a href="#" className="nav__a nav__a--drop">
                  Planning
                </a>
              </li>
            </ul>
          </li>
          <li className="nav__li nav__li--down" onClick={() => setDropDown2(!dropDown2)}>
            <a href="#" className="nav__a">
              Company {dropDown2 ? <GoChevronUp className="nav__icon" /> : <GoChevronDown className="nav__icon" /> }
            </a>
            <ul className={`nav__dropdown ${dropDown2 ? "nav__dropdown--active" : ""}`}>
              <li className="nav__li nav__li--drop">
                <a href="#" className="nav__a nav__a--drop">
                  History
                </a>
              </li>
              <li className="nav__li nav__li--drop">
                <a href="#" className="nav__a nav__a--drop">
                  Our Team
                </a>
              </li>
              <li className="nav__li nav__li--drop">
                <a href="#" className="nav__a nav__a--drop">
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="nav__li">
            <a href="#" className="nav__a">
              Careers
            </a>
          </li>
          <li className="nav__li">
            <a href="#" className="nav__a">
              About
            </a>
          </li>
        </ul>
        <ul className="nav__ul nav__ul--center">
          <li className="nav__li nav__li--center">
            <a href="#" className="nav__a">
              Login
            </a>
          </li>
          <li className="nav__li">
            <a href="#" className="nav__a nav__a--button">
              Register
            </a>
          </li>
        </ul>
        </div>
        <GoThreeBars className="nav__menu" onClick={() => setMenu(!menu)}/>
      </nav>
    </header>
  );
}

export default Nav;
