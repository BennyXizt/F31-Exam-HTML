import Achievments from "../../components/Achievments/Achievments";
import Header from "../../components/Header/Header"
import Introduction from "../../components/Introduction/Introduction"
import IntroductionAlt from "../../components/IntroductionAlt/IntroductionAlt";
import PhotoBackground from "../../components/PhotoBackground/PhotoBackground";
import Footer from "../../components/Footer/Footer"

function AboutPage(props) {
  return (
    <>
      <Header
        text={props.text.header}
        languages={props.languages}
        curLang={props.currLang}
        setLanguage={props.setLanguage}
        links={props.links}
      ></Header>
      <Introduction definition={props.text.experience.definition} advertice={props.text.introduction.list}/>
      <PhotoBackground team={props.text.backgroundImage}/>
      <IntroductionAlt definition={props.text.experience.definition}/>
      <Achievments title={props.text.achievments} image={props.achievmentsImage}/>
      <Footer />
    </>
  );
}

export default AboutPage;
