import homeBanner from './../../assets/home-banner.png';
import './Home.scss';

import LocationCard from './../../components/LocationCard/LocationCard';
import Locations from './../../assets/logements.json';
import Banner from '../../components/Default/Banner/Banner';

function Home() {
  return (
    <div className="home">
      <header className="home__banner">
        <Banner
          text="Chez vous, partout et ailleurs"
          bannerUrl={homeBanner}
          bannerAlt="Paysage"
        />
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
