import {
  changeinfChargePerson, CHANGE_CONTACT_VALUE, CHANGE_IN_CHARGE_PERSON, SERVICE_SELECTED,
} from '../actions/form';
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
    {
      id: 1, index: '--Choix du service--', form: null, text: '--Choix du service--',
    },
    {
      id: 2, index: 'administrativeDepartment', form: <FormAdmin />, text: 'Aides administrative',
    },
    {
      id: 3, index: 'babysittingService', form: <FormGarde />, text: 'Gardes d\'enfants',
    },
    {
      id: 4, index: 'housekeeping', form: <FormMenagers />, text: 'Aides ménagères',
    },
    {
      id: 5, index: 'personalAssistanceService', form: <FormPersonne />, text: 'Aides à la personne',
    },
  ],
  serviceList: {
    administrativeDepartment: [
      [
        { id: 'fistname', fistname: '', placeholder: 'Prénom' },
        { id: 'lastname', lastname: '', placeholder: 'nom' },
        { id: 'mail', value: '', placeholder: 'E-mail' },
        { id: 'adress', value: '', placeholder: 'adress' },
        { id: 'city', value: '', placeholder: 'ville' },
        { id: 'content', value: '', placeholder: 'information suplémentaire' },
      ],

      [
        { id: 'firstnameOfDeceased', firstnameOfDeceased: '', placeholder: 'firstnameOfDeceased' },
        { id: 'lastnameOfDeceased', lastnameOfDeceased: '', placeholder: 'lastnameOfDeceased' },
        { id: 'maidenNameOfDeceased', maidenNameOfDeceased: '', placeholder: 'maidenNameOfDeceased' },
        { id: 'adressDeceased', adressDeceased: '', placeholder: 'adressDeceased' },
        { id: 'zipCodeOfDeceased', zipCodeOfDeceased: '', placeholder: 'zipCodeOfDeceased' },
        { id: 'cityOfDeceased', cityOfDeceased: '', placeholder: 'cityOfDeceased' },
        { id: 'dateOfBirth', dateOfBirth: '', placeholder: 'dateOfBirth' },
        { id: 'placeOfBirth', placeOfBirth: '', placeholder: 'placeOfBirth' },
        { id: 'dateOfDeceased', dateOfDeceased: '', placeholder: 'dateOfDeceased' },
        { id: 'placeOfDeceased', placeOfDeceased: '', placeholder: 'placeOfDeceased' },
        { id: 'postalCode', postalCode: '', placeholder: 'postalCode' },
      ],
      [
        { func: changeinfChargePerson },
        { func2: 'changeInfDeceasedPerson' },
      ],
    ],
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
    case CHANGE_IN_CHARGE_PERSON:
      return {
        ...state,
        serviceList: {
          ...state.serviceList,
          administrativeDepartment: [
            ...state.serviceList.administrativeDepartment,

            // ...state.serviceList.administrativeDepartment[0],

            { [action.key]: action.selected },

            // [administrativeDepartment[0].[action.key]: action.selected],
          ],
        },
        // encore une fois la notation entre [] permet d'avoir une clé dynamique
      };
    default:
      return state;
  }
};

export default reducer;
