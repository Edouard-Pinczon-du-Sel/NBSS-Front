// import dataJobs from 'src/data/jobs';
import { SAVE_JOBS } from '../actions/jobs';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_JOBS:
      return {
        ...state,
        list: action.listJobs,
      };
    default:
      return state;
  }
};

export default reducer;
