import dataServices from 'src/data/services';
import { FETCH_SERVICES } from '../actions/services';

export const initialState = {
  list: dataServices,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
