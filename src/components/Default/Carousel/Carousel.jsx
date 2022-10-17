import './Carousel.scss';

const Carousel = ({ picturesUrl }) => {
  return (
    <div className="carousel">
      {picturesUrl.map((picture, index) => (
        <img key={index} src={picture} alt="" />
      ))}
    </div>
  );
};

export default Carousel;
