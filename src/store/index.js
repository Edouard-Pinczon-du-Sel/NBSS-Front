import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers';
import carouselMiddleWare from '../middlewares/CarouselApi';
import jobsMiddleWare from '../middlewares/JobsApi';
import formMiddleWare from '../middlewares/FormPostApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(carouselMiddleWare, jobsMiddleWare, formMiddleWare),
);

const store = createStore(reducer, enhancers);

export default store;
