import './Footer.scss'

import footerLogo from './../../assets/footer-logo.jpg'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={footerLogo} className="footer-logo" alt="logo" />
      </div>
      <div className="footer__copyright">
        <span>© {year} Kasa. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
