import footerLogo from './../../assets/footer-logo.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={footerLogo} className="footer-logo" alt="logo" />
      </div>
      <div className="footer__copyright">
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
