import { combineReducers } from 'redux';

import servicesReducer from './services';
import jobsReducer from './jobs';
import carouselReducer from './carousel';
import formReducer from './form';

const rootReducer = combineReducers({
  services: servicesReducer,
  jobs: jobsReducer,
  carousel: carouselReducer,
  form: formReducer,
});

export default rootReducer;
