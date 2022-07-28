import { combineReducers } from 'redux';

import servicesReducer from './services';
import jobsReducer from './jobs';
import carouselReducer from './carousel';

const rootReducer = combineReducers({
  services: servicesReducer,
  jobs: jobsReducer,
  carousel: carouselReducer,
});

export default rootReducer;
