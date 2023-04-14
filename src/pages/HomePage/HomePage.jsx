
import Header from "../../components/Header/Header";
import Logotype from "../../components/Logotype/Logotype";
import Experience from "../../components/Experience/Experience";
import Services from "../../components/Services/Services";
import Team from "../../components/Team/Team";
import Cases from "../../components/Cases/Cases";
import Clients from "../../components/Clients/Clients";
import Publications from "../../components/Publications/Publications";
import Footer from "../../components/Footer/Footer";

function HomePage(props) {
  return (
    <>
      <section className="advertising">
       <Header
            text={props.text.header}
            languages={props.languages}
            curLang={props.currLang}
            setLanguage={props.setLanguage}
            links={props.links}
        ></Header>
       <Logotype title={props.text.logotype.title}/>
       <Experience list={props.text.experience.list} definition={props.text.experience.definition}/>
       <Services upper={props.text.service.upper} title={props.text.service.title} list={props.text.service.list} images={props.serviceImages}/>
      </section>
      <Team upper={props.text.team.upper} title={props.text.team.title} name={props.text.team.name} job={props.text.team.job} images={props.teamImages}/>
      <Cases upper={props.text.cases.upper} list={props.text.cases.list}/>
      <Clients title={props.text.clients.title} images={props.clientImages} bgImages={props.clientColor}/>
      <Publications upper={props.text.publications.upper} title={props.text.publications.title} article={props.text.publications.list} button={props.text.publications.button} images={props.publicationImage}/>
      <Footer adress={props.text.footer.adress} map={props.text.footer.map} trademark={props.text.footer.trademark}/>
    </>
  );
}

export default HomePage;
