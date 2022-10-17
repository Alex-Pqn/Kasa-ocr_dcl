import './LocationCard.scss';

import { Link } from 'react-router-dom';

function LocationCard({ id, title, cover }) {
  return (
    <article className="locationCard">
      <img src={cover} alt="" />
      <Link to={`/location/${id}`}>
        <span>{title}</span>
      </Link>
    </article>
  );
}

export default LocationCard;
