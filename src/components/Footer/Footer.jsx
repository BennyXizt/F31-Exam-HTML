import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__separator _separator"></div>
        <div className="footer__content">
          <div className="footer__left">
            <span className="footer__adress">{props.adress}</span>
            <span className="footer__map">{props.map}</span>
            <a href="" className="footer__link">
              <FontAwesomeIcon icon={faFacebook} className="top-header_icon" />
            </a>
            <span className="footer__phone">+38 (050) 390 15 91</span>
            <span className="footer__mail">contact@hlegals.net</span>
          </div>
          <div className="footer__right">
            <span className="footer__trademark">{`© 2021 ${props.trademark} «HLEGALS»`}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
