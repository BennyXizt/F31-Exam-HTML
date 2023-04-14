import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import TeamList from "../../components/TeamList/TeamList";
import Footer from "../../components/Footer/Footer";

function TeamPage(props) {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                return prev == props.text.team.title.length - 1 ? 0 : prev + 1
            })
        }, 4000)
        return () => clearInterval(interval)
    }, [])
  return (
    <>
      <Header
        text={props.text.header}
        languages={props.languages}
        curLang={props.currLang}
        setLanguage={props.setLanguage}
        links={props.links}
      ></Header>
      <h2 className="_title" style={{maxWidth: "864px", margin: "80px auto 0"}}>{props.text.team.title[index]}</h2>
      <TeamList images={props.teamImages} names={props.text.team.name} jobs={props.text.team.job}/>
      <Footer adress={props.text.footer.adress} map={props.text.footer.map} trademark={props.text.footer.trademark}/>
    </>
  );
}

export default TeamPage;
