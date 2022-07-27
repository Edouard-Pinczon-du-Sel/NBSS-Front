import { combineReducers } from 'redux';

import servicesReducer from './services';
import jobsReducer from './jobs';

const rootReducer = combineReducers({
  services: servicesReducer,
  jobs: jobsReducer,
});

export default rootReducer;
