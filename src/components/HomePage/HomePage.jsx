
import Header from "../Header/Header";
import Logotype from "../Logotype/Logotype";
import Experience from "../Experience/Experience";
import Services from "../Services/Services";
import Team from "../Team/Team";

function HomePage(props) {
  return (
    <>
      <section className="advertising">
        <div className="advertising__container _container">
          <Header
            text={props.text.header}
            languages={props.languages}
            curLang={props.currLang}
            setLanguage={props.setLanguage}
            links={props.links}
          ></Header>
        </div>
       <Logotype title={props.text.logotype.title}/>
       <Experience list={props.text.experience.list} definition={props.text.experience.definition}/>
       <Services upper={props.text.service.upper} title={props.text.service.title} list={props.text.service.list} images={props.serviceImages}/>
      </section>
      <Team upper={props.text.team.upper} title={props.text.team.title} name={props.text.team.name} job={props.text.team.job} images={props.teamImages}/>
    </>
  );
}

export default HomePage;
