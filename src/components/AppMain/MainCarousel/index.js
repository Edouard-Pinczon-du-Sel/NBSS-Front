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
      adaptiveHeight
      speed={1500}
      autoplayInterval={4000}
      renderBottomCenterControls={({ currentSlide }) => (
        <div className="info">
          <span className="info--title"> nb services et soins</span>
          <span className="info--content">est une entreprise de services à la personne opérant dans plusieurs domaines. N’hésitez pas à faire appel à nous en bas de besoin !</span>
        </div>
      )}
      defaultControlsConfig={{
        pagingDotsStyle: {
          fill: 'red',
        },
        nextButtonClassName: 'sliderBtn sliderBtn--Next',
        nextButtonText: '>',
        prevButtonClassName: 'sliderBtn sliderBtn--Prev',
        prevButtonText: '<',
      }}
    >
      <img className="test" src="https://fakeimg.pl/800x300/" />
      <img className="test" src="https://fakeimg.pl/800x250/" />
      <img className="test" src="https://fakeimg.pl/800x400/" />
      <img className="test" src="https://fakeimg.pl/1000x500/" />
      <img className="test" src="https://fakeimg.pl/600x400/" />
      <img className="test" src="https://fakeimg.pl/900x500/" />
      <img className="test" src="https://fakeimg.pl/800x400/" />
    </Carousel>
  );
}

// == Export
export default MainCarousel;
