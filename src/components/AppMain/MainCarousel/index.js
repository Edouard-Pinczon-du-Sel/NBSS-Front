// == Import
// import PropTypesLib from 'prop-types';
import Carousel from 'nuka-carousel';
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
  if (list != null) {
    // console.log(list);
    // NOTE concernant la const dataImage je l'ai fait sauté car
    //  au final nous la récupéront avec le useSelector .

    return (
      <Carousel
        pauseOnHover
        autoplay
        wrapAround
        cellAlign="center"
        className="test_v2"
        adaptiveHeight
        speed={500}
        autoplayInterval={8000}
        renderBottomCenterControls={({ currentSlide }) => (
          <div className="info">
            <span className="info--title"> nb services et soins</span>
            <span className="info--content">est une entreprise de services à la personne opérant dans plusieurs domaines. N’hésitez pas à faire appel à nous en bas de besoin !</span>
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
          list.map((item) => <img key={item.id} className="test" src={item.largeImageURL} alt={item.id} />)
          // NOTE : Comme tu peux le voire Ligne 23 nous avions un console.log
          // de "list" et bien si tu ouvres un objet il y avait d'autre moyens
          // de récupéré l'URL de l'image dont le "largeImageURL" qui est
          // celon moi celui de meilleur qualité.
        }

      </Carousel>
    );
  }
}

// == Export
export default MainCarousel;
