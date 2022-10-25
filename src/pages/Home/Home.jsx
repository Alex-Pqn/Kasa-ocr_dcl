import './Home.scss';

import { useEffect, useState } from 'react';

import { locationService } from '../../_services/location.service.js';
import { handleError } from '../../_helpers/handle-error.js';

import LocationCard from './../../components/LocationCard/LocationCard';
import Banner from '../../components/Default/Banner/Banner';
import homeBanner from './../../assets/home-banner.png';

function Home() {
  let [locations, setLocations] = useState();
  let [isLoading, setLoading] = useState(true);
  let [error, setError] = useState('');

  useEffect(() => {
    locationService
      .findAll()
      .then((locations) => {
        setLocations(locations);
        setLoading(false);
      })
      .catch((err) => {
        handleError.err(err);
        setError(err);
      });
  }, []);

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
        {error ? (
          <span>Error on loading locations :(</span>
        ) : isLoading ? (
          <span>Loading locations..</span>
        ) : (
          locations.map((location, index) => (
            <LocationCard
              key={`${location.id}-${index}`}
              id={location.id}
              cover={location.cover}
              title={location.title}
            />
          ))
        )}
      </section>
    </div>
  );
}

export default Home;
