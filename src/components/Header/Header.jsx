import "../css/Header.css";

function Header(props) {
  return (
    <header className="header">
      <div class="header__container _container">
        <figure className="header__figure">
          <img src="./logo.png" alt="logo" className="header__image" />
          <figcaption className="header__caption">
            {props.text.title}
          </figcaption>
        </figure>
        <div className="header__right">
          <div className="top-header header__right__top">
            <div className="top-header_language">
              {props.languages.map((e, i) => {
                return (
                  <>
                    <input
                      name="top-header_language"
                      id={`language_${i}`}
                      type="radio"
                      value={e}
                      onClick={props.setLanguage}
                      className="top-header_input"
                    />
                    <label htmlFor={`language_${i}`} className={e === props.curLang ? "top-header_text active" : "top-header_text"}>{e}</label>
                  </>
                );
              })}
            </div>
            <div className="top-header_adress">{props.text.adress}</div>
            <a href="tel:380503901591" className="top-header_link">+38 (050) 390 15 91</a>
          </div>
          <nav className="bottom-header header__right__bottom">
              <ul className="bottom-header_list">
                {
                    props.text.list.map((e, i) => {
                        return <li key={i} className="bottom-header_item">
                            <a href="" className="bottom-header_link">{e}</a>
                        </li>
                    })
                }
              </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
