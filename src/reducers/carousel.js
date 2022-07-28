// import dataCarousel from 'src/api/CarrouselApi';
import { SAVE_CAROUSEL } from '../actions/carousel';

export const initialState = {
  list: [], // NOTE et oui le message d'erreur que tu avais nétait
  // pas un manque d'accès ou autres c'est tout simplement que de
  // base dans le carousel on mappais sur "kiki" et "toto" mais ce
  // ne sont que de simple chaine de caractère sans "ID".
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
