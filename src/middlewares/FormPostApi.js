import axios from 'axios';
import { FETCH_FORM_POST, initState } from '../actions/formPost';
import encodeContact from '../encoder/encoderContact';

const formMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FORM_POST: {
      console.log('data envoyé => ', action?.data);
      const encodedContact = encodeContact(action.data, action.key);
      axios.post('https://gatechien-server.eddi.cloud/NB-services-et-soin/current/public/api/contact', encodedContact)
        .then(
          (response) => {
            console.log('reponse de l\'API :', response); // NOTE //! A SUPPRIMER AVANT BUILD
            if (response.status === 201) {
              store.dispatch(initState());
            }
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
