import { CHANGE_VALUE } from '../actions/form';

export const initialState = {
  contact: {
    firstname: 'Prénom',
    lastname: 'Nom',
    maidenName: 'Nom de jeune fille',
    // NOTE peut être null
    mail: 'E-Mail',
    adress: 'Adresse',
    zipCode: 'Code postale',
    city: 'Ville',
    phoneNumber: 'Numéro de téléphone',
    // content: '',
    // preferency: true, // NOTE BOOLEEN concernant si le client souhaite être
    // recontacter par mobile ou non
    // createdAt: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
        // encore une fois la notation entre [] permet d'avoir une clé dynamique
      };
    default:
      return state;
  }
};

export default reducer;
