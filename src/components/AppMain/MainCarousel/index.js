/* eslint-disable jsx-a11y/alt-text */
// == Import
// import PropTypesLib from 'prop-types';
import Carousel from 'nuka-carousel';
import './styles.scss';

// == Composant
function MainCarousel() {
  return (
    <Carousel
      pauseOnHover
      autoplay
      wrapAround
      cellAlign="center"
      className="test_v2"
      pagingDotsClassName="dots"
      renderTopCenterControls={({ currentSlide }) => (
        <div>Slide: {currentSlide}</div>
      )}
      renderCenterLeftControls={false}
      renderCenterRightControls={false}
      defaultControlsConfig={{
        pagingDotsStyle: {
          fill: 'red',
        },
      }}
    >
      <img className="test" src="https://fakeimg.pl/800x250/" />
      <img className="test" src="https://fakeimg.pl/800x250/" />
      <img className="test" src="https://fakeimg.pl/800x250/" />
    </Carousel>
  );
}

// == Export
export default MainCarousel;
