import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers';
import carouselMiddleWare from '../middlewares/CarouselApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(carouselMiddleWare),
);
// la fonction me retourne mon objet store
const store = createStore(reducer, enhancers);

// que je peux exporter pour m'en servir ailleurs
export default store;
