import { Link } from "react-router-dom";

function Publications(props) {
  return (
    <section className="publications">
      <div className="publications__container _container">
        <Link to="/publications" className="publications__upper _link">
          {props.upper}
        </Link>

        <h2 className="publications__title _title">{props.title}</h2>
        <div className="publications__list">
          {props.article.map((e, i) => {
            return (
              <article key={i} className="publications__item">
                <figure
                  style={props.images[i] ? {} : { display: "none" }}
                  className="publications__item-figure"
                >
                  <img
                    src={props.images[i]}
                    alt={`publication-image${i + 1}`}
                    className="publications__item-image"
                  />
                </figure>
                <div className="publications__content">
                  <h3 className="publications__content-title">{e.title}</h3>
                  <div className="publications__content-date">{e.date}</div>
                  <div className="publications__content-separator"></div>
                  <div className="publications__content-article">
                    {`${e.article.slice(0, 117)}...`}
                  </div>
                </div>
              </article>
            );
          })}
          <button className="publications__button _btn">{props.button}</button>
        </div>
      </div>
    </section>
  );
}

export default Publications;
