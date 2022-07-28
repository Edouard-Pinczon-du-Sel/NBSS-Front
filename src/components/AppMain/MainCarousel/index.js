/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
// == Import
// import PropTypesLib from 'prop-types';
import Carousel from 'nuka-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarousel } from '../../../actions/carousel';

// import carouselApi from '../../../api/CarrouselApi';
import './styles.scss';
//? petit teste de mapping (simulation de reception de donnée en Json pour les image du carousel)
const dataExempleImgCarousel = {
  data: [
    {
      id: '1',
      link: 'https://fakeimg.pl/800x300/',
      alt: 'fakeimg 800x300',
    },
    {
      id: '2',
      link: 'https://fakeimg.pl/800x250/',
      alt: 'fakeimg 800x250',
    },
    {
      id: '3',
      link: 'https://fakeimg.pl/800x400/',
      alt: 'fakeimg 800x400',
    },
    {
      id: '4',
      link: 'https://fakeimg.pl/1000x500/',
      alt: 'fakeimg 1000x500',
    },
    {
      id: '5',
      link: 'https://fakeimg.pl/900x500/',
      alt: 'fakeimg 900x500',
    },
  ],
};

//test API AXIOS (API Gratuite testé = https://pixabay.com/api/docs/ )

// == Composant
function MainCarousel() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarousel());
  }, []);

  const { list } = useSelector((state) => state.carousel);
  const dataImages = list.hits;
  console.log(dataImages);

  // const { list } = useSelector((state) => state.carousel);
  // console.log(list);

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
      {/*
         dataImages.map((item) => <img key={item.id} className="test" src={item.pageURL} alt={item.id} />)
      */}
    </Carousel>
  );
}

// == Export
export default MainCarousel;
