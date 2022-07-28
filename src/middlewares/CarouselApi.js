import axios from 'axios';
// import { useSelector } from 'react-redux';
import { FETCH_CAROUSEL, saveCarousel } from '../actions/carousel';

const carouselMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CAROUSEL: {
      const { carousel: list } = store.getState();

      axios.get('https://pixabay.com/api/?key=28894609-e1f1514f1960c2fc6912f278f&image_type=photo&orientation=horizontal&category=health&per_page=5')
        .then(
          (response) => {
            console.log('reponse de l\'API :', response.data);
            store.dispatch(saveCarousel(response.data));
            console.log(list);
          },
        )
        .catch(
          (error) => {
            console.error('error :', error);
          },
        );
      return next(action);
    }
    default:
      return next(action);
  }
};

export default carouselMiddleWare;
// ''
