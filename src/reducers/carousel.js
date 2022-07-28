// import dataCarousel from 'src/api/CarrouselApi';
import { SAVE_CAROUSEL } from '../actions/carousel';

export const initialState = {
  list: [1,2,3,4],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CAROUSEL:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
