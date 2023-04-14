import Carousel from "../Carousel/Carousel";

function Achievments(props) {
  return (
    <section className="achievments">
      <div className="achievments__container _container">
        <h2 className="achievments__title">{props.title}</h2>
        <Carousel width={1320}>
          {props.image.map((e, i) => {
            return (
              <div className="achievments__item">
                <figure className="achievments__elem">
                  <img src={e} alt="" />
                </figure>
                <figure className="achievments__elem">
                  <img src={e} alt="" />
                </figure>
                <figure className="achievments__elem">
                  <img src={e} alt="" />
                </figure>
                <figure className="achievments__elem">
                  <img src={e} alt="" />
                </figure>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Achievments;
