import { useEffect } from 'react';
import './Banner.scss';

const Banner = ({ isExtended, text, bannerUrl, bannerAlt }) => {
  useEffect(() => {
    const toggleExtendedMode = () =>
      document.getElementById('banner').classList.add('banner--extended');

    if (isExtended) toggleExtendedMode();
  });

  return (
    <div id="banner" className="banner">
      <div className="banner__layer">
        <img src={bannerUrl} alt={bannerAlt} />
      </div>
      {text && <span>{text}</span>}
    </div>
  );
};

export default Banner;
