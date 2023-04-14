import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function ContactPage(props) {
  return (
    <>
      <Header
        text={props.text.header}
        languages={props.languages}
        curLang={props.currLang}
        setLanguage={props.setLanguage}
        links={props.links}
      ></Header>
      <section className="contact">
        <div className="contact__container _container">
          <div className="contact__wrapper">
            <div className="contact__left">
              <div className="contact__left-item">
                <span className="contact__left-text">
                  {props.text.header.adress}
                </span>
                <span className="contact__left-separator _separator"></span>
              </div>
              <div className="contact__left-item">
                <span className="contact__left-text">+38 (050) 390 15 95</span>
                <span className="contact__left-text _active">
                  contact@hlegals.net
                </span>
                <span className="contact__left-separator _separator"></span>
              </div>
              <div className="contact__left-item">
                <div className="contact__left-text _active">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="top-header_icon"
                  />
                  <span className="contact__left-link">Наша сторінка в фейсбуці</span>
                </div>
              </div>
            </div>
            <form action="" className="contact__right">
                <h2 className="contact__right-title _title">Ми хотіли б Вам допомогти</h2>
                <input type="text" name="" id="" className="contact__right-input" placeholder="Iм`я"/>
                <textarea className="contact__right-input" placeholder="Повідомлення" />
                <label htmlFor="">Як вам відповісти?</label>
                <input type="text" name="" id="" className="contact__right-input" placeholder="Номер телефона"/>
                <input type="text" name="" id="" className="contact__right-input" placeholder="Чи email"/>
                <button className="contact__right-btn _btn">Надіслати запит</button>
            </form>
          </div>
        </div>
        <figure className="contact__map">
            <img
              src="/contact/map.png"
              alt="no-image"
              className="contact__image"
            />
          </figure>
      </section>
      <Footer adress={props.text.footer.adress} map={props.text.footer.map} trademark={props.text.footer.trademark}/>
    </>
  );
}

export default ContactPage;
