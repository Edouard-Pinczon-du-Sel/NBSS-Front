/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import { CHANGE_ADMINISTRATIVE_DEPARTMENT, CHANGE_CONTACT_VALUE, SERVICE_SELECTED } from '../actions/form';
import FormAdmin from '../components/AppForm/FormAdmin';
import FormGarde from '../components/AppForm/FormGarde';
import FormMenagers from '../components/AppForm/FormMenagers';
import FormPersonne from '../components/AppForm/FormPersonne';

export const initialState = {
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
  miseEnPage: {
    contact: {
      firstname: 'Prénom',
      lastname: 'Nom',
      maidenName: 'Nom de jeune fille',
      mail: 'E-Mail',
      adress: 'Adresse',
      zipCode: 'Code postale',
      city: 'Ville',
      phoneNumber: 'Numéro de téléphone',
    },
    administrativeDepartment: {
      contactInCharge: {
        firstname: 'Prénom',
        lastname: 'Nom',
        mail: 'E-mail',
        adress: 'Adress',
        city: 'Ville test',
        content: 'Information suplémentaire',
      },
      aboutDeceasedPerson: {
        firstnameOfDeceased: 'Prénom',
        lastnameOfDeceased: 'Nom',
        maidenNameOfDeceased: 'Nom de jeune fille',
        adressDeceased: 'Adresse',
        postalCode: 'Code postale',
        cityOfDeceased: 'Ville',
        dateOfBirth: 'Date de naissance',
        placeOfBirth: 'Lieu de naissance',
        dateOfDeceased: 'Date de décès',
        placeOfDeceased: 'Lieu de cécès',
        zipCodeOfDeceased: 'Code postale du lieu de décès',
      },
    },
    babysittingService: {
      days: 'Les jours d\'intervention',
      intervention: 'a quel moment de la journée',
      numberChild: 'Nombre d\'enfant',
      numberHour: 'Nombre d\'heure de garde souhaité',
      content: 'information suplémentaire',
    },
    housekeeping: {
      frequency: 'Fréquence de passage',
      numberHour: 'Nombre d\'heure souhaité',
      content: 'information suplémentaire',
    },
    personalAssistanceService: {
      organization: 'Êtes-vous rattachez à une organisation ?',
      personalAssistance: 'Bénéficiez vous déja d\'une Assistance',
      intervention: 'à quel moment souhaitez une intervention',
      financialHelp: 'bénéficiez vous d\'une aide ',
      numberHour: 'Nombre d\'heure souhaiter',
      content: 'information suplémentaire',
    },
  },
  // serviceList: {
  //   administrativeDepartment: {
  //     contactInCharge: [
  //       { id: 'fistname', fistname: '', placeholder: 'Prénom' },
  //       { id: 'lastname', lastname: '', placeholder: 'nom' },
  //       { id: 'mail', mail: '', placeholder: 'E-mail' },
  //       { id: 'adress', adress: '', placeholder: 'adress' },
  //       { id: 'city', city: '', placeholder: 'ville' },
  //       { id: 'content', content: '', placeholder: 'information suplémentaire' },
  //     ],

  //     infoDeceased: [
  //       { id: 'firstnameOfDeceased', firstnameOfDeceased: '', placeholder: 'firstnameOfDeceased' },
  //       { id: 'lastnameOfDeceased', lastnameOfDeceased: '', placeholder: 'lastnameOfDeceased' },
  //       { id: 'maidenNameOfDeceased', maidenNameOfDeceased: '', placeholder: 'maidenNameOfDeceased' },
  //       { id: 'adressDeceased', adressDeceased: '', placeholder: 'adressDeceased' },
  //       { id: 'zipCodeOfDeceased', zipCodeOfDeceased: '', placeholder: 'zipCodeOfDeceased' },
  //       { id: 'cityOfDeceased', cityOfDeceased: '', placeholder: 'cityOfDeceased' },
  //       { id: 'dateOfBirth', dateOfBirth: '', placeholder: 'dateOfBirth' },
  //       { id: 'placeOfBirth', placeOfBirth: '', placeholder: 'placeOfBirth' },
  //       { id: 'dateOfDeceased', dateOfDeceased: '', placeholder: 'dateOfDeceased' },
  //       { id: 'placeOfDeceased', placeOfDeceased: '', placeholder: 'placeOfDeceased' },
  //       { id: 'postalCode', postalCode: '', placeholder: 'postalCode' },
  //     ],
  //     // funcList:
  //     //   { func: changeinfChargePerson, func2: changeInfDeceasedPerson },
  //   },
  //   babysittingService: {
  //     content: '',
  //     days: '',
  //     intervention: '',
  //     numberChild: '',
  //     numberHour: '',
  //   },
  //   housekeeping: {
  //     content: '',
  //     frequency: '',
  //     numberHour: '',
  //   },
  //   personalAssistanceService: {
  //     content: '',
  //     organization: '',
  //     personalAssistance: '',
  //     intervention: '',
  //     financialHelp: true,
  //     numberHour: '',
  //   },

  // },
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
        recap: {
          ...state.recap,
          contact: {
            ...state.recap.contact,
            [action.key]: action.value,
          },
        },
      };
    case SERVICE_SELECTED:
      return {
        ...state,
        [action.key]: action.selected,
      };
    case CHANGE_ADMINISTRATIVE_DEPARTMENT:
      // const newArrayOfInChargePerson = state.serviceList.administrativeDepartment.contactInCharge.map(
      //   (element) => (element.id === action.key ? { ...element, [action.key]: action.selected }
      //     : element),
      // );
      return {
        ...state,
        recap: {
          ...state.recap,
          administrativeDepartment: {
            ...state.recap.administrativeDepartment,
            [action.key]: action.value,
          },
        },
      //   serviceList: {
      //     ...state.serviceList,
      //     administrativeDepartment: {
      //       ...state.serviceList.administrativeDepartment,
      //       infoDeceased: newArrayOfInChargePerson,
      //     },
      //   },
      };
    // case CHANGE_INF_DECEASED_PERSON:
      // const newArrayOfInfosDeceasedPerson = state.serviceList.administrativeDepartment.contactInCharge.map(
      //   (element) => (element.id === action.key ? { ...element, [action.key]: action.selected }
      //     : element),
      // );
      // return {
      // ...state,
      // serviceList: {
      //   ...state.serviceList,
      //   administrativeDepartment: {
      //     ...state.serviceList.administrativeDepartment,
      //     contactInCharge: newArrayOfInfosDeceasedPerson,
      //   },
      // },
      // };
    default:
      return state;
  }
};

export default reducer;
