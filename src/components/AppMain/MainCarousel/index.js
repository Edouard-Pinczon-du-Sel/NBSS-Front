// == Import
// import PropTypesLib from 'prop-types';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarousel } from '../../../actions/carousel';
// import carouselApi from '../../../api/CarrouselApi';
import './styles.scss';

// test API AXIOS (API Gratuite testé = https://pixabay.com/api/docs/ )

// == Composant
function MainCarousel() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarousel());
  }, []);
  const { list } = useSelector((state) => state.carousel);
  const carouselFiltered = list.filter((img) => img.placeOrder !== null);
  if (list != null) {
    return (
      <Carousel
        animation="zoom"
        zoomScale="0.5"
        pauseOnHover
        autoplay
        wrapAround
        cellAlign="center"
        className="carouselNuka"
        adaptiveHeightAnimation
        speed={800}
        autoplayInterval={8000}
        renderBottomCenterControls={({ currentSlide }) => (
          <div className="info">
            <span className="info--title">NB SERVICES ET SOINS</span>
            <span className="info--content">est une entreprise de services à la personne opérant dans plusieurs domaines. N’hésitez pas à faire appel à nous en bas de besoin !</span>
            <Link to="/en-savoir-plus" className="info--link">en savoir plus</Link>
          </div>
        )}
        defaultControlsConfig={{
          nextButtonClassName: 'sliderBtn sliderBtn--Next',
          nextButtonText: '>',
          prevButtonClassName: 'sliderBtn sliderBtn--Prev',
          prevButtonText: '<',
        }}
      >
        {
          carouselFiltered.map((item) => <img key={item.id} className="imgDisplayed" src={item.urlPicture} alt={item.id} />)
        }

      </Carousel>
    );
  }
}

// == Export
export default MainCarousel;
