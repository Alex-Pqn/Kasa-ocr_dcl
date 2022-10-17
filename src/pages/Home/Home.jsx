import banner from './../../assets/home-banner.png';
import './Home.scss';

import LocationCard from './../../components/LocationCard/LocationCard';
import Locations from './../../assets/logements.json';

function Home() {
  return (
    <div className="home">
      <header className="home__banner">
        <div className="home__banner__layer">
          <img src={banner} className="home-banner" alt="banner" />
        </div>
        <span>Chez vous, partout et ailleurs</span>
      </header>
      <section className="home__location-cards">
        {Locations.map((location, index) => (
          <LocationCard
            key={`${location.id}-${index}`}
            id={location.id}
            cover={location.cover}
            title={location.title}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
