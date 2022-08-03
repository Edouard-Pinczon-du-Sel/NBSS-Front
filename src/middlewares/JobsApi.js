import axios from 'axios';
// import { useSelector } from 'react-redux';
import { FETCH_JOBS, saveJobs } from '../actions/jobs';

const jobsMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_JOBS: {
      axios.get('http://gatechien-server.eddi.cloud/NB-services-et-soin/current/public/api/recruitment')
        .then(
          (response) => {
            console.log('reponse de l\'API :', response.data); // NOTE //! A SUPPRIMER AVANT BUILD
            store.dispatch(saveJobs(response.data));
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

export default jobsMiddleWare;
