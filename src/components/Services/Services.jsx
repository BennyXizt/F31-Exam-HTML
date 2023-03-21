import { Link } from "react-router-dom";

function Services(props) {
  return (
    <section className="service">
      <div className="service__container _container">
        <Link to="/services" className="service__link _link">
          {props.upper}
        </Link>
        <h2 className="service__title _title">{props.title}</h2>

        <div className="service__list list-service">
          {props.list.text.map((e, i) => {
            return (
              <div key={i} className="list-service_item">
                <figure className="list-service_figure">
                  <img src={props.images[i]} alt={`list-image-${i}`} className="list-service_image" />
                </figure>
                <h3 className="list-service_title">{props.list.title[i]}</h3>
                <div className="list-service_text">{e}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
