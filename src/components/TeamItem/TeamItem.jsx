function TeamItem(props) {
  return (
    <div className="teamList__item">
      <figure className="teamList__figure">
        <img src={props.image} alt="no-image" />
      </figure>
      <div className="teamList__link">
        <span>{props.name}</span>
        <span>{props.job}</span>
      </div>
    </div>
  );
}

export default TeamItem;
