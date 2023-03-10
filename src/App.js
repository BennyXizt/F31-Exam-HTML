import './css/App.css';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {
  let [curLang, setCurLang] = useState("ру")
  let [languages, setLanguages] = useState([
    "ру", "en"
  ])
  let translatedText = {
    "ру" : {
      "header": {
        "title": "юридическая компания",
        "adress": "Одесса, Адмиральський пр., 3",
        "list": [
          "о нас",
          "услуги",
          "команда",
          "публикации",
          "контакты"
        ]
      }
    },
    "en" : {
      "header": {
        "title": "law company",
        "adress": "Odessa, Admiral's av., 3",
        "list": [
          "about",
          "services",
          "team",
          "publications",
          "contact"
        ]
      }
    }
  }
  function setCurrentLanguage(e) {
    if(e.target.value !== curLang)
    {
      setCurLang(e.target.value)
    }
  }

  return (
   <>
    <Header text = {translatedText[curLang].header} languages = {languages} curLang = {curLang} setLanguage = {setCurrentLanguage} >
    </Header>
   </>
  );
}

export default App;
