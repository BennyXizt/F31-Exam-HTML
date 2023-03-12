import "./css/App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  let [currLang, setCurrLang] = useState("ру");
  let [languages, setLanguages] = useState(["ру", "en"]);
  let translatedText = {
    ру: {
      header: {
        title: "юридическая компания",
        adress: "Одесса, Адмиральський пр., 3",
        list: ["о нас", "услуги", "команда", "публикации", "контакты"],
      },
    },
    en: {
      header: {
        title: "law company",
        adress: "Odessa, Admiral's av., 3",
        list: ["about", "services", "team", "publications", "contact"],
      },
    },
  };
  function setCurrentLanguage(e) {
    if (e.target.value !== currLang) {
      setCurrLang(e.target.value);
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <HomePage
              text={translatedText[currLang].header}
              languages={languages}
              currLang={currLang}
              setLanguage={setCurrentLanguage}
              links={translatedText["en"].header.list}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              text={translatedText[currLang].header}
              languages={languages}
              currLang={currLang}
              setLanguage={setCurrentLanguage}
              links={translatedText["en"].header.list}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
