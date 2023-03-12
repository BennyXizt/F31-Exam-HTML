
import Header from "../Header/Header";

function HomePage(props) {

  return (
    <>
      <section className="advertising">
        <div className="advertising__container _container">
          <Header
            text={props.text}
            languages={props.languages}
            curLang={props.currLang}
            setLanguage={props.setLanguage}
            links={props.links}
          ></Header>
        </div>
      </section>
      Home Page
    </>
  );
}

export default HomePage;
