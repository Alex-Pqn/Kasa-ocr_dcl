import React from 'react';
import Carousel from '../../components/Default/Carousel/Carousel';
import Subtitle from '../../components/Default/Subtitle/Subtitle';
import Title from '../../components/Default/Title/Title';
import Tag from '../../components/Default/Tag/Tag';
import UserCard from '../../components/User/UserCard/UserCard';
import Rating from '../../components/Default/Rating/Rating';
import DropdownMenu from '../../components/Default/DropdownMenu/DropdownMenu';
import Locations from './../../assets/logements.json';
import './Location.scss';

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Tests
      id: 'b4c67936',
    };

    this.location = Locations.find((location) => location.id === this.state.id);
  }

  componentDidMount() {
    // Tests
    console.log(this.location);

    document.title = this.location.title;
  }

  render() {
    const location = this.location;

    return (
      <div className="location">
        <header className="location__banner">
          {/* <Carousel pictures={location.pictures} /> */}
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
                  userName={location.host.name}
                  userAvatarUrl={location.host.picture}
                />
              </div>
              <div className="location__item__rating">
                <Rating currentRating={location.rating} maxRating={5} />
              </div>
            </div>
          </div>
          <div className="location__item__dropdown-menus">
            <div className="location__item__description">
              <DropdownMenu title="Description" text={location.description} />
            </div>
            <div className="location__item__equipments">
              <DropdownMenu title="Équipements" list={location.equipments} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Location;
