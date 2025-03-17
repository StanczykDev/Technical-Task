import { ReactComponent as LogoIcon } from "./assets/LogoIcon.svg";
import { ReactComponent as LogoTitle } from "./assets/LogoTitle.svg";
import { ReactComponent as MenuIcon } from "./assets/MenuIcon.svg";
import './App.sass';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <div className="icon"><LogoIcon /></div>
          <div className="title"><LogoTitle /></div>
        </div>
        <div className="menu">
          <div className="icon"><MenuIcon /></div>
        </div>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
