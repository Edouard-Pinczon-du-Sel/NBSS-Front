import axios from 'axios';
// import { useSelector } from 'react-redux';
import { FETCH_FORM_POST } from '../actions/formPost';

const formMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FORM_POST: {
      console.log('data envoyé => ', action.data);
      axios.post('http://gatechien-server.eddi.cloud/NB-services-et-soin/current/public/api/contact', action.data)
        .then(
          (response) => {
            console.log('reponse de l\'API :', response);
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

export default formMiddleWare;
