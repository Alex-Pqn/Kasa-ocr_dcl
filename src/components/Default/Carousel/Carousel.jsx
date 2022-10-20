import ArrowRightIcon from '../../Icon/ArrowRight/ArrowRight';
import ArrowLeftIcon from '../../Icon/ArrowLeft/ArrowLeft';

import './Carousel.scss';
import { useEffect, useState, useCallback } from 'react';

const Carousel = ({ picturesUrl }) => {
  let [activeItem, setActiveItem] = useState();
  let [activeItemIndex, setActiveItemIndex] = useState();

  const items = picturesUrl;
  const maxItems = items.length;
  const maxItemIndexes = maxItems - 1;

  const isThereASingleItem = useCallback(() => {
    return items.length <= 1;
  }, [items]);

  // Static carousel
  // Turn off the added layer for navigation
  const staticCarousel = () =>
    document
      .getElementsByClassName('carousel')[0]
      .classList.add('carousel-static');

  // Event: Next Item
  function nextItemEvent() {
    const nextItem = items[activeItemIndex + 1];
    const nextItemIndex = activeItemIndex + 1;

    nextItem ? setNextItem(nextItem, nextItemIndex) : loopFromStart();
  }
  // Event: Prev Item
  function prevItemEvent() {
    const prevItem = items[activeItemIndex - 1];
    const prevItemIndex = activeItemIndex - 1;

    prevItem ? setPrevItem(prevItem, prevItemIndex) : loopFromEnd();
  }

  // Set: Next Item
  function setNextItem(nextItem, nextItemIndex) {
    setActiveItem(nextItem);
    setActiveItemIndex(nextItemIndex);
  }
  // Set: Prev Item
  function setPrevItem(prevItem, prevItemIndex) {
    setActiveItem(prevItem);
    setActiveItemIndex(prevItemIndex);
  }

  // Loop from the start
  const loopFromStart = useCallback(() => {
    setActiveItem(items[0]);
    setActiveItemIndex(0);
  }, [setActiveItem, setActiveItemIndex, items]);

  // Loop from the end
  function loopFromEnd() {
    setActiveItem(items[maxItemIndexes]);
    setActiveItemIndex(maxItemIndexes);
  }

  // Event: DOM load for the first time
  // => Static carousel if less than one item
  // => Loop carousel from the start
  useEffect(() => {
    if (isThereASingleItem()) staticCarousel();
    loopFromStart();
  }, [loopFromStart, isThereASingleItem]);

  return (
    <div className="carousel">
      <div className="carousel__item">
        <img key={activeItemIndex} src={activeItem} alt="" />
      </div>
      <div className="carousel__layer">
        <div className="carousel__layer__controls">
          <div className="control-prev control">
            <span onClick={prevItemEvent}>
              <ArrowLeftIcon />
            </span>
          </div>
          <div className="control-next control">
            <span onClick={nextItemEvent}>
              <ArrowRightIcon />
            </span>
          </div>
        </div>
        <div className="carousel__layer__indicator">
          <span>
            {activeItemIndex + 1}/{maxItems}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
