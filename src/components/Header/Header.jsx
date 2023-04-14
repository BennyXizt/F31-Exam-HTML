import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function Header(props) {
  const location = useLocation();
  const [isBurger, setIsBurger] = useState(false)


  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__left">
          <Link to="/" className="header__left-link">
            <h1 className="header__left-title title-header">
              <span className="title-header_main">hlegals</span>
              {location.pathname != "/" && (
                <>
                  <span className="title-header_addition">
                    /{location.pathname.substring(1)}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      position: "absolute",
                      top: "60%",
                      right: "-55px",
                      transform: `translate(0, -50%)`,
                      width: "50px",
                      height: "50px",
                      background: `url("./logo-p.svg") no-repeat center center / contain`,
                    }}
                  ></span>
                </>
              )}
            </h1>
            <span className="header__left-caption">{props.text.title}</span>
          </Link>
        </div>
        <div className="header__right">
          <div className="top-header header__right__top">
            <div className="top-header_language">
              {props.languages.map((e, i) => {
                return (
                  <React.Fragment key={i}>
                    <input
                      name="top-header_language"
                      id={`language_${i}`}
                      type="radio"
                      value={e}
                      onClick={props.setLanguage}
                      className="top-header_input"
                    />
                    <label
                      htmlFor={`language_${i}`}
                      className={
                        e === props.curLang
                          ? "top-header_text active"
                          : "top-header_text"
                      }
                    >
                      {e}
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="top-header_adress">{props.text.adress}</div>
            <a href="tel:380503901591" className="top-header_link">
              +38 (050) 390 15 91
            </a>
            <a href="#" className="top-header_link">
              <FontAwesomeIcon icon={faFacebook} className="top-header_icon" />
            </a>
          </div>
          <nav className="bottom-header header__right__bottom">
            <ul className="bottom-header_list">
              {props.text.list.map((e, i) => {
                return (
                  <li key={i} className="bottom-header_item">
                    <Link
                      to={`/${props.links[i]}`}
                      className="bottom-header_link"
                    >
                      {e}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="burger-menu" onClick={() => setIsBurger(true)}>
              <span></span>
              <span></span>
              <span></span>
          </div>
          <nav className="burger-menu__list" style={isBurger ? {display: "block"} : {display: "none"}}>
            <button onClick={() => setIsBurger(false)}>X</button>
              <ul>
              {props.text.list.map((e, i) => {
                return (
                  <li key={i} className="bottom-header_item">
                    <Link
                      to={`/${props.links[i]}`}
                      className="bottom-header_link"
                    >
                      {e}
                    </Link>
                  </li>
                );
              })}
              </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
