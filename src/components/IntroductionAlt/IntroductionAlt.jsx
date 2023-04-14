function IntroductionAlt(props) {
  return (
    <section className="introductionAlt">
      <div className="introductionAlt__container _container">
        <h2 className="introductionAlt__title _title">
          {props.definition[1].title}
        </h2>
        <span className="introductionAlt__text">
          {props.definition[1].article.slice(0, 358)} <br /> <br />
          {props.definition[1].article.slice(358, 410)} <br /> <br />
          {props.definition[1].article.slice(410)}
        </span>
      </div>
    </section>
  );
}

export default IntroductionAlt;
