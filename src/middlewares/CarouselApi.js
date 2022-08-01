import axios from 'axios';
// import { useSelector } from 'react-redux';
import { FETCH_CAROUSEL, saveCarousel } from '../actions/carousel';

const carouselMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CAROUSEL: {
      // const { carousel: list } = store.getState(); // ANCHOR console.log à supprimer

      axios.get('http://virginieboissiere-server.eddi.cloud/NB-services-et-soin/current/public/api/picture')
        .then(
          (response) => {
            // console.log('reponse de l\'API :', response);
            store.dispatch(saveCarousel(response.data));
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
