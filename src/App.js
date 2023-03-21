import "./css/App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  let [currLang, setCurrLang] = useState("ру");
  let [languages, setLanguages] = useState(["ру", "en"]);
  let serviceImages = [
    "/services/shopping-bag.svg",
    "/services/work-bag.svg",
    "/services/corona.svg",
    "/services/collaboration.svg",
    "/services/shield.svg",
    "/services/judgement.svg",
  ];
  let teamImages = [
    "/team/team1.png",
    "/team/team2.png",
    "/team/team3.png",
    "/team/team4.png",
    "/team/team5.png",
    "/team/team6.png",
  ];
  let translatedText = {
    ру: {
      header: {
        title: "юридическая компания",
        adress: "Одесса, Адмиральський пр., 3",
        list: ["о нас", "услуги", "команда", "публикации", "контакты"],
      },
      logotype: {
        title: "системный администратор правовых решений",
      },
      experience: {
        list: [
          "последовательные",
          "клиентоориентированные",
          "инновационные",
          "бизнес-ориентированные юристы",
        ],
        definition: {
          title: [
            "переворачиваем представление о юридических услугах",
            "клиентоориентированность - наша страсть!",
            "наша юридическая компания - настоящий пенсионер в инновациях!",
            "выходите за рамки стандартных услуг",
          ],
          list: [
            "Консолидируя многолетний опыт и практику, юристы компании сопровождают сложные проекты и добиваются принятия ряда важных для отрасли решений. Многие формируют практику применения морского права в Украине.",
            "Мы превращаем сложные юридические процессы в удобные и понятные для наших клиентов, стремясь всегда оказать им максимальную поддержку и помощь в решении их проблем. Мы ценим каждого клиента и всегда готовы выйти за рамки стандартных услуг, чтобы обеспечить индивидуальный подход к каждому случаю.",
            "Мы с головой погружены в мир новых технологий и всегда стремимся применять самые передовые методы работы для максимальной эффективности и удобства наших клиентов. Мы не боимся экспериментировать и искать нестандартные решения для сложных задач.",
            "У нас вы найдете команду опытных юристов, которые знают, как защитить интересы вашего бизнеса и помочь вам принимать взвешенные решения. Мы готовы стать вашим надежным партнером и помочь вам достичь успеха в бизнесе!",
          ],
        },
      },
      service: {
        upper: "услуги",
        title: "что мы умеем делать лучше остальных?",
        list: {
          title: [
            "IT и электронная коммерция",
            "Комплексное ежедневное юридическое сопровождение",
            "Структуризация корпоративных отношений",
            "Построение договорных отношений",
            "Защита бизнеса, интеллектуальной собственности",
            "Судебное представительство",
          ],
          text: [
            "Бесконечный поток договоров, налоговые вопросы, трудовые отношения, корпоративные бумаги – юридическая работа отвлекает вас от ведения бизнеса. Но работы не так уж много, чтобы нанимать инхауз-юриста.",
            "К тому же со временем работа станет однотипной и неинтересной для штатного юриста. А еще мы хорошо знаем, как трудно найти хорошего кандидата с опытом в сфере информационных технологий.",
            "Вместо просто предоставлять юридические услуги, мы закрепим юриста или целую команду, которые впишутся в повседневную жизнь вашей компании.",
            "Раз в неделю или неделю в месяц у вас под боком есть ваш собственный юрист. Кто-нибудь в компании может поймать его возле кофеварки и просто поговорить о текущих делах вместо ожидания статуса update.",
            "А все остальное время он будет работать над новыми разноплановыми проектами, потому уж точно не остановится в профессиональном развитии. Так или иначе на вас будет работать весь Axon Partners вместо корпоративного юриста.",
            "Небольшая компания, среднего размера, или лидер рынка? Локальный бизнес или транснациональная компания? У вас есть собственный юридический отдел, или нет?",
          ],
        },
      },
      team: {
        upper: "команда",
        title: [
          "Мы привыкли брать на себя ответственность и всегда гарантируем честную, своевременную помощь, даже в ситуациях, когда большинство бессильны.",
          "Никаких жертв без нашей защиты!",
          "Юридическая помощь на высшем уровне!",
          "Мы боремся за справедливость!",
          "Доверьтесь профессионалам и выигрывайте дела!",
          "Защитим ваши права и свободы!",
        ],
        name: [
          "Александр Александровский",
          "Олег Кобзар",
          "Владислав Мельник",
          "Антон Мельник",
          "Оксана Кобзар",
          "Юлия Гудименко",
        ],
        job: [
          "Управляющий партнер",
          "Долевой партнер",
          "Прокурист",
          "Присяжный поверенный",
          "Менеджер",
          "Стажёр",
        ],
      },
    },
    en: {
      header: {
        title: "law company",
        adress: "Odessa, Admiral's av., 3",
        list: ["about", "services", "team", "publications", "contact"],
      },
      logotype: {
        title: "system administrator of legal solutions",
      },
      experience: {
        list: [
          "consistent",
          "client-oriented",
          "innovative",
          "business-oriented lawyers",
        ],
        definition: {
          title: [
            "redefining legal services",
            "customer focus is our passion!",
            "our law firm is a real pensioner in innovation!",
            "go beyond standard services",
          ],
          list: [
            "By consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve the adoption of a number of important decisions for the industry. Many of them shape the practice of maritime law in Ukraine.",
            "We turn complex legal processes into convenient and understandable for our clients, always striving to provide them with maximum support and assistance in solving their problems. We value each client and are always ready to go beyond standard services to provide an individual approach to each case.",
            "We are deeply immersed in the world of new technologies and always strive to apply the most advanced working methods for maximum efficiency and convenience for our customers. We are not afraid to experiment and look for non-standard solutions for complex tasks.",
            "With us you will find a team of experienced lawyers who know how to protect the interests of your business and help you make informed decisions. We are ready to become your reliable partner and help you achieve business success!",
          ],
        },
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
              text={translatedText[currLang]}
              languages={languages}
              currLang={currLang}
              setLanguage={setCurrentLanguage}
              links={translatedText["en"].header.list}
              serviceImages={serviceImages}
              teamImages={teamImages}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              text={translatedText[currLang]}
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
