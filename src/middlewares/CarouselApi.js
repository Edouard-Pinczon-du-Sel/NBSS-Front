import axios from 'axios';
// import { useSelector } from 'react-redux';
import { FETCH_CAROUSEL, saveCarousel } from '../actions/carousel';

const carouselMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CAROUSEL: {
      // const { carousel: list } = store.getState(); // ANCHOR console.log à supprimer

      axios.get('https://pixabay.com/api/?key=28894609-e1f1514f1960c2fc6912f278f&image_type=photo&orientation=horizontal&category=health~hospital&per_page=5')
        .then(
          (response) => {
            // console.log('reponse de l\'API :', response.data);
            store.dispatch(saveCarousel(response.data.hits));
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
