import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons/faFlag";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

function Introduction(props) {
  return (
    <section className="introduction">
      <div className="introduction__container _container">
        <div className="introduction__left">
          <h1 className="introduction__title _title">
            {props.definition[0].title}
          </h1>
          <span className="introduction__text">
            {props.definition[0].article.slice(0, 204)}
            <br />
            <br />
            {props.definition[0].article.slice(204)}
          </span>
        </div>
        <div className="introduction__right">
          <p className="introduction__item">
            <figure className="introduction__figure">
              <FontAwesomeIcon icon={faFlag} className="introduction__icon" />
            </figure>
            <span className="introduction__subtitle _title">10+</span>
            <span className="introduction__advertice">
              {props.advertice[0]}
            </span>
          </p>
          <p className="introduction__item">
            <figure className="introduction__figure">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="introduction__icon"
              />
            </figure>
            <span className="introduction__subtitle _title">30+</span>
            <span className="introduction__advertice">
              {props.advertice[1]}
            </span>
          </p>
          <p className="introduction__item">
            <figure className="introduction__figure">
              <FontAwesomeIcon icon={faStar} className="introduction__icon" />
            </figure>
            <span className="introduction__subtitle _title">500+</span>
            <span className="introduction__advertice">
              {props.advertice[2]}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
