import { ReactComponent as LogoIcon } from "./assets/LogoIcon.svg";
import { ReactComponent as LogoTitle } from "./assets/LogoTitle.svg";
import { ReactComponent as MenuIcon } from "./assets/MenuIcon.svg";
import './App.sass';

const cardsTitles = ['Move the borders of reality!', 'Space is not just stars and planets', 'For those who dream of stars', 'Fulfill your fantastic dreams'];
const cardsSubTitles = ['Go on a space adventure', 'it is a majestic journey to ', 'Our offer: make your dream come true', 'Space has never been so close'];

function LearnMoreButton({ variant = 'base'}) {
  return <button className={`infoButton infoButton--${variant}`}>
    Learn more
  </button>
}

function Card({ title, subTitle }) {
  return <div className="offersCard">
          <h1 className="cardTitle">
            {title}
          </h1>
          <h2 className="cardSubTitle">
            {subTitle}
          </h2>
          <LearnMoreButton variant="outlined" />
        </div>
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <div className="icon"><LogoIcon /></div>
          <div className="title"><LogoTitle /></div>
        </div>
        <button className="menu">
          <div className="icon"><MenuIcon /></div>
        </button>
      </header>
      <main className="main">
        <div className="banner">
          <h1 className="promoTitle">
            Discover the vast expanses of <span className="accent">space</span>
          </h1>
          <h2 className="promoSubTitle">
            Where the possibilities are <span className="attention">endless!</span>
          </h2>
          <LearnMoreButton />
        </div>
        <div className="offers">
          <h3 className="offersSubTitle">Offers</h3>
          {cardsTitles.map((title, index) => <Card title={title} subTitle={cardsSubTitles[index]} />)}
        </div>
        <div className="description">
          <h3 className="de1531547scriptionSubTitle">Embark on a space journey</h3>
          <p className="descriptionText">
            Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
          </p>
          <button className="descriptionInfoButton">Read more</button>
        </div>
      </main>
      <footer className="footer">
        <h1 className="footerTitle">Exciting space adventure!</h1>
      </footer>
    </div>
  );
}

export default App;
