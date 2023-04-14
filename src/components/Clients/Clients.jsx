
function Clients(props) {

  return (
    <section className="clients">
      <h2 className="clients__title">{props.title}</h2>
      <div className="clients__list">
        {props.images.map((e, i) => {
          return (
            <figure key={i} className="clients__item" style={props.bgImages[i]}>
              <img src={e} alt={`clients_${i + 1}`} className="clients__image"/>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default Clients;
