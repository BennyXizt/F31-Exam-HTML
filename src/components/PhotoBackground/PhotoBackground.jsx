function PhotoBackgroud(props) {
  return (
    <section
      className="backgroundImage"
      style={{
        background: "url('introduction/image.jpg') no-repeat center center / cover",
      }}
    >
      <div className="backgroundImage__container _container">
        <h2 className="backgroundImage__text">{props.team}</h2>
      </div>
    </section>
  );
}

export default PhotoBackgroud;
