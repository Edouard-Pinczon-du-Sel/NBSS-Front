import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers';
import carouselMiddleWare from '../middlewares/CarouselApi';
import jobsMiddleWare from '../middlewares/JobsApi';
import formMiddleWare from '../middlewares/FormPostApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(carouselMiddleWare, jobsMiddleWare, formMiddleWare),
);
// la fonction me retourne mon objet store
const store = createStore(reducer, enhancers);

// que je peux exporter pour m'en servir ailleurs
export default store;
