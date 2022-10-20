import React from 'react';
import Subtitle from '../../components/Default/Subtitle/Subtitle';
import Title from '../../components/Default/Title/Title';
import Tag from '../../components/Default/Tag/Tag';
import UserCard from '../../components/Default/UserCard/UserCard';
import Rating from '../../components/Default/Rating/Rating';
import DropdownMenu from '../../components/Default/DropdownMenu/DropdownMenu';
import Locations from './../../assets/logements.json';
import Carousel from '../../components/Default/Carousel/Carousel';

import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router';

import './Location.scss';

function Location() {
  const { id } = useParams();
  const location = Locations.find((location) => location.id === id);

  if (!location) return <Navigate to="/not/found" />;

  document.title = location.title;

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
