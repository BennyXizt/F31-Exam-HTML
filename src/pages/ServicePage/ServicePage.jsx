import Cases from "../../components/Cases/Cases";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import Clients from "../../components/Clients/Clients";
import Footer from "../../components/Footer/Footer";

function ServicePage(props) {
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
        <Services
          upper={props.text.service.upper}
          title={props.text.service.title}
          list={props.text.service.list}
          images={props.serviceImages}
        />
      </section>
      <Cases upper={props.text.cases.upper} list={props.text.cases.list}/>
      <Clients title={props.text.clients.title} images={props.clientImages} bgImages={props.clientColor}/>
      <Footer adress={props.text.footer.adress} map={props.text.footer.map} trademark={props.text.footer.trademark}/>
    </>
  );
}

export default ServicePage;
