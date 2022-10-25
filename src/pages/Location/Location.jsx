import './Location.scss';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { locationService } from '../../_services/location.service.js';
import { handleError } from '../../_helpers/handle-error';

import Subtitle from '../../components/Default/Subtitle/Subtitle';
import Title from '../../components/Default/Title/Title';
import Tag from '../../components/Default/Tag/Tag';
import UserCard from '../../components/Default/UserCard/UserCard';
import Rating from '../../components/Default/Rating/Rating';
import DropdownMenu from '../../components/Default/DropdownMenu/DropdownMenu';
import Carousel from '../../components/Default/Carousel/Carousel';
import Error404 from '../../pages/Error404/Error404';

function Location() {
  const { id } = useParams();

  let [location, setLocation] = useState();
  let [isLoading, setLoading] = useState(true);
  let [error, setError] = useState('');

  useEffect(() => {
    locationService
      .findOne({ id })
      .then((location) => {
        setLocation(location);
        document.title = location.title;

        setLoading(false);
      })
      .catch((err) => {
        handleError.err(err);
        setError(err);
      });
  }, [id]);

  if (error) return <Error404 />;

  if (isLoading) return <span>Loading location..</span>;

  return (
    <div className="location">
      <header className="location__banner">
        <Carousel picturesUrl={location.pictures} />
      </header>
      <section className="location__item">
        <div className="location__item__infos">
          <div className="location__item__infos__left">
            <div className="location__item__title">
              <Title title={location.title} />
            </div>
            <div className="location__item__location">
              <Subtitle subtitle={location.location} />
            </div>
            <div className="location__item__tags">
              {location.tags.map((tag, index) => (
                <Tag key={`${location.id}-${index}`} tag={tag} />
              ))}
            </div>
          </div>
          <div className="location__item__infos__right">
            <div className="location__item__user-card">
              <UserCard
                name={location.host.name}
                avatarUrl={location.host.picture}
              />
            </div>
            <div className="location__item__rating">
              <Rating currentRating={location.rating} maxRating={5} />
            </div>
          </div>
        </div>
        <div className="location__item__dropdown-menus">
          <div className="dropdown-menus__container dropdown-menus__description">
            <DropdownMenu title="Description" text={location.description} />
          </div>
          <div className="dropdown-menus__container dropdown-menus__equipments">
            <DropdownMenu title="Équipements" list={location.equipments} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Location;
