import "./css/App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import ServicePage from "./pages/ServicePage/ServicePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import PublicationPage from "./pages/PublicationPage/PublicationPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  let [currLang, setCurrLang] = useState("ру");
  let [languages, setLanguages] = useState(["ру", "en"]);
  let serviceImages = [
    "/F31-Exam-HTML/services/shopping-bag.svg",
    "/F31-Exam-HTML/services/work-bag.svg",
    "/F31-Exam-HTML/services/corona.svg",
    "/F31-Exam-HTML/services/collaboration.svg",
    "/F31-Exam-HTML/services/shield.svg",
    "/F31-Exam-HTML/services/judgement.svg",
  ];
  let teamImages = [
    "/F31-Exam-HTML/team/team1.png",
    "/F31-Exam-HTML/team/team2.png",
    "/F31-Exam-HTML/team/team3.png",
    "/F31-Exam-HTML/team/team4.png",
    "/F31-Exam-HTML/team/team5.png",
    "/F31-Exam-HTML/team/team6.png",
  ];
  let clientImages = [
    "/F31-Exam-HTML/clients/logo1.png",
    "/F31-Exam-HTML/clients/logo2.png",
    "/F31-Exam-HTML/clients/logo3.png",
    "/F31-Exam-HTML/clients/logo4.png",
    "/F31-Exam-HTML/clients/logo5.png",
    "/F31-Exam-HTML/clients/logo6.png",
    "/F31-Exam-HTML/clients/logo7.png",
    "/F31-Exam-HTML/clients/logo8.png",
    "/F31-Exam-HTML/clients/logo9.png",
    "/F31-Exam-HTML/clients/logo10.png",
    "/F31-Exam-HTML/clients/logo11.png",
    "/F31-Exam-HTML/clients/logo12.png",
  ];
  let clientColor = [
    { backgroundColor: "#1C4280" },
    { backgroundColor: "#143646" },
    { backgroundColor: "#F48B30" },
    { backgroundColor: "#9E4DC3" },
    { backgroundColor: "#FD9339" },
    { backgroundColor: "#E2E2E4" },
    { backgroundColor: "#C71C36" },
    { backgroundColor: "#DCF3F9" },
    { backgroundColor: "#EAEAEA" },
    { backgroundColor: "#282240" },
    { backgroundColor: "#1D4568" },
    { backgroundColor: "#000000" },
  ];
  let publicationImage = [
    "",
    "/F31-Exam-HTML/publications/p1.png",
    "/F31-Exam-HTML/publications/p2.png",
    "/F31-Exam-HTML/publications/p3.png",
    "/F31-Exam-HTML/publications/p4.png",
    "/F31-Exam-HTML/publications/p5.png",
  ];
  let achievmentsImage = [
    "/F31-Exam-HTML/achievments/image.png",
    "/F31-Exam-HTML/achievments/image2.png",
    "/F31-Exam-HTML/achievments/image3.png",
    "/F31-Exam-HTML/achievments/image4.png",
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
        definition: [
          {
            title: "переворачиваем представление о юридических услугах",
            article: `Консолидируя многолетний опыт и практику, юристы компании сопровождают сложные проекты и добиваются принятия ряда важных для отрасли решений. Многие формируют практику применения морского права в Украине.
              Prolegals – надежный бизнес-партнер, подтверждаемый стабильным сотрудничеством с международными юридическими фирмами, доверием крупных украинских и международных компаний, признанием профессиональных рейтингов.`,
          },
          {
            title: "качество - это то, о чем мы заботимся больше всего.",
            article:
              "Исторически неизменная юридическая профессия начала переформатироваться в последние годы. Клиенты это ощущают, но юридические компании все еще сопротивляются эволюции. Клиенты нуждаются в удобстве, простоте, прозрачной оплате. Google, IBM WatsOn, Symantec Clearwell доказывают, что технологическая революция в юридических услугах началась и стала неизбежной. Качество - это то, о чем мы заботимся больше всего. Всё просто. Если вы недовольны нашей работой, мы вернем деньги. Мы доверяем нашим клиентам. И мы хотим, чтобы клиенты нам тоже доверяли.",
          },
          {
            title:
              "наша юридическая компания - настоящий пенсионер в инновациях!",
            article:
              "Мы с головой погружены в мир новых технологий и всегда стремимся применять самые передовые методы работы для максимальной эффективности и удобства наших клиентов. Мы не боимся экспериментировать и искать нестандартные решения для сложных задач.",
          },
          {
            title: "выходите за рамки стандартных услуг",
            article:
              "У нас вы найдете команду опытных юристов, которые знают, как защитить интересы вашего бизнеса и помочь вам принимать взвешенные решения. Мы готовы стать вашим надежным партнером и помочь вам достичь успеха в бизнесе!",
          },
        ],
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
      cases: {
        upper: "успешные кейсы",
        list: [
          {
            title:
              "Подготовка комплексного юридического заключения для европейского банка",
            company: "WannaBiz",
          },
          {
            title:
              "Сопровождение проекта по купле-продаже сельскохозяйственной продукции",
            company: "tapgerine",
          },
          {
            title:
              "Сопровождение проекта по купле-продаже сельскохозяйственной продукции",
            company: "Hillel IT School",
          },
          {
            title:
              "Представительство интересов крупного зернотрейдера в налоговом споре",
            company: "3D LOOK",
          },
          {
            title: "Обжалование налоговых уведомлений-решений ГФС",
            company: "adtelligent",
          },
          {
            title:
              "Сопровождение проекта по кредитованию агротрейдеров мальтийским банком",
            company: "Clikky",
          },
        ],
      },
      clients: {
        title: "уже доверяют нам",
      },
      publications: {
        upper: "публикации",
        title: "нам есть что рассказать",
        button: "еще публикации",
        list: [
          {
            title: "Валютный контроль умер, да здравствует валютный контроль!",
            date: "14 июня",
            article:
              "Эксперты проводят конференции, круглые столы и другие мероприятия на тему «либерализация валютного законодательства». Юристы-эксперты-новеллисты стирают пальцы о «ctrl+c/ctrl+v».",
          },
          {
            title: "Ассоциированный акционер",
            date: "22 апреля",
            article:
              "На проектах я – джун. При этом я совладелец юридической фирмы. Как это вышло. Перед вступлением родители мне говорили, что если буду...",
          },
          {
            title:
              "Штраф для «Корпорации добра»: что будет с Google и другими за нарушение GDPR",
            date: "29 сентября",
            article:
              "И почему взыскание в 50 млн евро может стать судьбоносным прецедентом? По материалам Mind.ua 21 января Национальная комиссия по защите данных.",
          },
          {
            title: "Завещание миллениала",
            date: "19 августа",
            article:
              "Что и как будут передавать по наследству современные влоггеры, опинион лидеры и криптомиллионеры Типичное наследие украинского поколения Х выглядит так: квартира у…",
          },
          {
            title: "Закон о языках: как сделать свой сайт подходящим",
            date: "date",
            article: "article",
          },
          {
            title: "title",
            date: "date",
            article: "article",
          },
        ],
      },
      footer: {
        adress: "Одесса, Адмиральський пр., 3",
        map: "посмотреть на карте",
        trademark: "ООО Юридическая компания",
      },
      introduction: {
        list: [
          "лет релевантного опыта",
          "активных клиентов, которые доверяют нам свои поручения ежемесячно",
          "часов работы «pro bono» ежегодно",
        ],
      },
      backgroundImage: "команда",
      achievments: "достижения",
      publicationsEntry: {
        switcher: ["новости", "компания"],
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
              clientImages={clientImages}
              clientColor={clientColor}
              publicationImage={publicationImage}
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
              achievmentsImage={achievmentsImage}
            />
          }
        />
        <Route
          path="/services"
          element={
            <ServicePage
              text={translatedText[currLang]}
              languages={languages}
              currLang={currLang}
              setLanguage={setCurrentLanguage}
              links={translatedText["en"].header.list}
              serviceImages={serviceImages}
              clientImages={clientImages}
              clientColor={clientColor}
            />
          }
        />
        <Route
          path="/team"
          element={
            <TeamPage
              text={translatedText[currLang]}
              languages={languages}
              currLang={currLang}
              setLanguage={setCurrentLanguage}
              links={translatedText["en"].header.list}
              teamImages={teamImages}
            />
          }
        />
        <Route
          path="/publications"
          element={
            <PublicationPage
              text={translatedText[currLang]}
              languages={languages}
              currLang={currLang}
              setLanguage={setCurrentLanguage}
              links={translatedText["en"].header.list}
              publicationImage={publicationImage}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
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
