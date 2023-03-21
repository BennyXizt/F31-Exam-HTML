

function Logotype(props) {
  return (
    <section className="logotype">
      <div
        className="logotype__container _container"
        style={{
          backgroundImage: "url(./logo-p-big.png), url(./logo-p-multiple.png)",
        }}
      >
        <h2 className="logotype__title">{props.title}</h2>
      </div>
    </section>
  );
}

export default Logotype;
