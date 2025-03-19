import { ReactComponent as LogoIcon } from "./assets/LogoIcon.svg";
import { ReactComponent as LogoTitle } from "./assets/LogoTitle.svg";
import { ReactComponent as MenuIcon } from "./assets/MenuIcon.svg";
import { ReactComponent as CloseIcon } from "./assets/CloseIcon.svg";
import './App.sass';
import { useCallback, useState } from "react";

const menuItemContents = ['Home', 'Products', <span className="wheelCartIcon"></span>];

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

function MenuItem({ children }) {
  return <li className="menuItem">
      <button className="menuItemButton">{children}</button>
    </li>
}

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const onMenuClick = useCallback(() => {
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <div className="icon"><LogoIcon /></div>
          <div className="title"><LogoTitle /></div>
        </div>
        <button className="menuButton" onClick={onMenuClick}>
          {!isMenuOpened 
            ? <div className="iconMenu"><MenuIcon /></div>
            : <div className="iconClose"><CloseIcon /></div>
          }
        </button>
        <ul className={`menuList${isMenuOpened ? ' opened' : ''}`} style={{ 'listStyleType': 'none '}}>
          {menuItemContents.map(content => <MenuItem key={content.toString()}>{content}</MenuItem>)}
        </ul>
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
          <div className="offersCards">
            {cardsTitles.map((title, index) => <Card title={title} subTitle={cardsSubTitles[index]} key={title} />)}
          </div>
        </div>
        <div className="description">
          <h3 className="descriptionSubTitle">Embark on a space journey</h3>
          <p className="descriptionText">
            Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
          </p>
          <p className="descriptionText hiddenContent">
            Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
          </p>
          <div className="descriptionInfoButtonContainer">
            <button className="descriptionInfoButton">Read more</button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <h1 className="footerTitle">Exciting space adventure!</h1>
      </footer>
    </div>
  );
}

export default App;
