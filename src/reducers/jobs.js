import dataJobs from 'src/data/jobs';
import { FETCH_JOBS } from '../actions/jobs';

export const initialState = {
  list: dataJobs,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
