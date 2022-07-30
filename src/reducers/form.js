import { CHANGE_CONTACT_VALUE, SERVICE_SELECTED } from '../actions/form';
import FormAdmin from '../components/AppForm/FormAdmin';
import FormGarde from '../components/AppForm/FormGarde';
import FormMenagers from '../components/AppForm/FormMenagers';
import FormPersonne from '../components/AppForm/FormPersonne';

export const initialState = {
  contact: {
    firstname: '',
    lastname: '',
    maidenName: '',
    // NOTE peut être null
    mail: '',
    adress: '',
    zipCode: '',
    city: '',
    phoneNumber: '',
    // content: '', // dans la dernière étape du formulaire
    // preferency: true, // NOTE BOOLEEN concernant si le client souhaite être
    // recontacter par mobile ou non
    // createdAt: '', // info a envoyer dans le récap
  },
  contact_placeholder: {
    firstname: 'Prénom',
    lastname: 'Nom',
    maidenName: 'Nom de jeune fille',
    mail: 'E-Mail',
    adress: 'Adresse',
    zipCode: 'Code postale',
    city: 'Ville',
    phoneNumber: 'Numéro de téléphone',
  },
  serviceSelected: '--Choix du service--',
  servicesForm: [
    { index: '--Choix du service--', form: null },
    { index: 'administrativeDepartment', form: <FormAdmin /> },
    { index: 'babysittingService', form: <FormGarde /> },
    { index: 'housekeeping', form: <FormMenagers /> },
    { index: 'personalAssistanceService', form: <FormPersonne /> },
  ],
  serviceList: {
    administrativeDepartment: {
      firstname: '',
      lastname: '',
      mail: '',
      adress: '',
      city: '',
      content: '',
      firstnameOfDeceased: '',
      lastnameOfDeceased: '',
      maidenNameOfDeceased: '',
      adressDeceased: '',
      zipCodeOfDeceased: '',
      cityOfDeceased: '',
      dateOfBirth: '',
      placeOfBirth: '',
      dateOfDeceased: '',
      placeOfDeceased: '',
      postalCode: '',
    },
    babysittingService: {
      content: '',
      days: '',
      intervention: '',
      numberChild: '',
      numberHour: '',
    },
    housekeeping: {
      content: '',
      frequency: '',
      numberHour: '',
    },
    personalAssistanceService: {
      content: '',
      organization: '',
      personalAssistance: '',
      intervention: '',
      financialHelp: true,
      numberHour: '',
    },

  },
  recap: {
    contact: {
      firstname: '',
      lastname: '',
      maidenName: '', // NOTE peut être null
      mail: '',
      adress: '',
      zipCode: '',
      city: '',
      phoneNumber: '',
      content: '', // dans la dernière étape du formulaire
      preferency: true, // NOTE BOOLEEN concernant si le client souhaite être
      // recontacter par mobile ou non
      createdAt: '', // info a envoyer dans le récap
    },
    administrativeDepartment: {
      firstname: '',
      lastname: '',
      mail: '',
      adress: '',
      city: '',
      content: '',
      firstnameOfDeceased: '',
      lastnameOfDeceased: '',
      maidenNameOfDeceased: '',
      adressDeceased: '',
      zipCodeOfDeceased: '',
      cityOfDeceased: '',
      dateOfBirth: '',
      placeOfBirth: '',
      dateOfDeceased: '',
      placeOfDeceased: '',
      postalCode: '',
    },
    babysittingService: {
      content: '',
      days: '',
      intervention: '',
      numberChild: '',
      numberHour: '',
    },
    housekeeping: {
      content: '',
      frequency: '',
      numberHour: '',
    },
    personalAssistanceService: {
      content: '',
      organization: '',
      personalAssistance: '',
      intervention: '',
      financialHelp: true,
      numberHour: '',
    },
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_VALUE:
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.key]: action.value,
        },
        // encore une fois la notation entre [] permet d'avoir une clé dynamique
      };
    case SERVICE_SELECTED:
      return {
        ...state,
        [action.key]: action.selected,
        // encore une fois la notation entre [] permet d'avoir une clé dynamique
      };
    default:
      return state;
  }
};

export default reducer;
