function PublicationsEntry(props) {
  return (
    <section className="publicationsEntry">
      <div className="publicationsEntry__container _container">
        <div className="publicationsEntry__switcher">
          <div className="publicationsEntry__switcher_wrapper">
            <button className="publicationsEntry__button">
              {props.switcher[0]}
            </button>
            <button className="publicationsEntry__button">
              {props.switcher[1]}
            </button>
          </div>
        </div>
        <div className="publicationsEntry__list">
          {props.publications.map((e, i) => {
            return (
              <article key={i} className="publicationsEntry__item">
                <figure
                  style={props.images[i] ? {} : { display: "none" }}
                  className="publicationsEntry__item-figure"
                >
                  <img
                    src={props.images[i]}
                    alt={`publication-image${i + 1}`}
                    className="publicationsEntry__item-image"
                  />
                </figure>
                <div className="publicationsEntry__content">
                  <h3 className="publicationsEntry__content-title">{e.title}</h3>
                  <div className="publicationsEntry__content-date">{e.date}</div>
                  <div className="publicationsEntry__content-separator"></div>
                  <div className="publicationsEntry__content-article">
                    {e.article}
                  </div>
                </div>
              </article>
            );
          })}
          {props.publications.map((e, i) => {
            return (
              <article key={i} className="publicationsEntry__item">
                <figure
                  style={props.images[i] ? {} : { display: "none" }}
                  className="publicationsEntry__item-figure"
                >
                  <img
                    src={props.images[i]}
                    alt={`publication-image${i + 1}`}
                    className="publicationsEntry__item-image"
                  />
                </figure>
                <div className="publicationsEntry__content">
                  <h3 className="publicationsEntry__content-title">{e.title}</h3>
                  <div className="publicationsEntry__content-date">{e.date}</div>
                  <div className="publicationsEntry__content-separator"></div>
                  <div className="publicationsEntry__content-article">
                    {e.article}
                  </div>
                </div>
              </article>
            );
          })}
          {props.publications.map((e, i) => {
            return (
              <article key={i} className="publicationsEntry__item">
                <figure
                  style={props.images[i] ? {} : { display: "none" }}
                  className="publicationsEntry__item-figure"
                >
                  <img
                    src={props.images[i]}
                    alt={`publication-image${i + 1}`}
                    className="publicationsEntry__item-image"
                  />
                </figure>
                <div className="publicationsEntry__content">
                  <h3 className="publicationsEntry__content-title">{e.title}</h3>
                  <div className="publicationsEntry__content-date">{e.date}</div>
                  <div className="publicationsEntry__content-separator"></div>
                  <div className="publicationsEntry__content-article">
                    {e.article}
                  </div>
                </div>
              </article>
            );
          })}

            <button className="publicationsEntry__button _btn">{props.button}</button>
        </div>

      </div>
    </section>
  );
}

export default PublicationsEntry;
