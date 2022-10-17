import StarEmptyIcon from '../../Icon/StarEmpty/StarEmpty';
import StarFullIcon from '../../Icon/StarFull/StarFull';

import React, { useEffect } from 'react';

import './Rating.scss';

const Rating = ({ currentRating, maxRating }) => {
  useEffect(() => {
    console.log(currentRating);
    console.log(maxRating);
  });

  return (
    <div className="rating">
      <div className="rating__full-icons">
        {[...Array(parseFloat(currentRating))].map((x, index) => (
          <StarFullIcon key={index} />
        ))}
      </div>
      <div className="rating__empty-icons">
        {[...Array(maxRating - parseFloat(currentRating))].map((x, index) => (
          <StarEmptyIcon key={index} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
