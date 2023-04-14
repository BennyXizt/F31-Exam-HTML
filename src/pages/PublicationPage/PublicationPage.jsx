import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PublicationsEntry from "../../components/PublicationsEntry/PublicationsEntry";

function PublicationPage(props) {
  return (
    <>
      <Header
        text={props.text.header}
        languages={props.languages}
        curLang={props.currLang}
        setLanguage={props.setLanguage}
        links={props.links}
      ></Header>
        <PublicationsEntry switcher={props.text.publicationsEntry.switcher} publications={props.text.publications.list} images={props.publicationImage} button={props.text.publications.button}/>
        <Footer adress={props.text.footer.adress} map={props.text.footer.map} trademark={props.text.footer.trademark}/>
    </>
  );
}

export default PublicationPage;
