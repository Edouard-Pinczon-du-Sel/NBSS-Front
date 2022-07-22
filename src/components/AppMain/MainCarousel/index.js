/* eslint-disable jsx-a11y/alt-text */
// == Import
// import PropTypesLib from 'prop-types';
import Carousel from 'nuka-carousel';
import './styles.scss';

// == Composant
function MainCarousel() {
  return (
    <Carousel>
      <img src="https://fakeimg.pl/250x100/" />
      <img src="https://fakeimg.pl/250x100/" />
      <img src="https://fakeimg.pl/250x100/" />
      <img src="https://fakeimg.pl/250x100/" />
    </Carousel>
  );
}

// == Export
export default MainCarousel;
