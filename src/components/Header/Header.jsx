import './Header.scss';

import { Link } from 'react-router-dom';

import largeLogo from './../../assets/large-logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={largeLogo} className="header-logo" alt="logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
