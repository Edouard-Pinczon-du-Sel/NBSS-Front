/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import {
  ACTION_NEW_DATE_FOR,
  CHANGE_ADMINISTRATIVE_DEPARTMENT,
  CHANGE_BABYSITTING,
  CHANGE_BABYSITTING_CHECK,
  CHANGE_BABYSITTING_TEXTAREA,
  CHANGE_BABYSITTING_UNCHECK,
  CHANGE_CONTACT_CREATED_AT,
  CHANGE_CONTACT_VALUE,
  CHANGE_HOUSEKEEPING_FREQUENCY,
  CHANGE_HOUSEKEEPING_NUMBER_HOUR,
  CHANGE_HOUSEKEEPING_TEXTEAREA,
  CHANGE_PERSONNAL_ASSISTANCE_CHECK,
  CHANGE_PERSONNAL_ASSISTANCE_FINANCIAL_HELP,
  CHANGE_PERSONNAL_ASSISTANCE_NUMBER_HOUR,
  CHANGE_PERSONNAL_ASSISTANCE_ORGANIZATION,
  CHANGE_PERSONNAL_ASSISTANCE_TEXTAREA,
  CHANGE_PERSONNAL_ASSISTANCE_UN_CHECK,
  SERVICE_SELECTED,
} from '../actions/form';
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
        city: 'Ville',
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
        placeOfDeceased: 'Lieu de décès',
        zipCodeOfDeceased: 'Code postale du lieu de décès',
      },
    },
    babysittingService: {
      content: 'information suplémentaire',
      days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
      intervention: ['Matin', 'Déjeuner', 'Après-midi', 'Diner', 'Soir'],
      numberChild: 'Nombre d\'enfant',
      numberHour: 'Nombre d\'heure de garde souhaité',
    },
    housekeeping: {
      frequency: ['Choix de la fréquence du service', 'Hebdomadaire', 'Fréquence de passage', 'Une fois par semaine', 'Une fois par quinzaine', 'Une fois par mois', 'Ponctuel'],
      numberHour: 'Nombre d\'heure souhaité',
      content: 'information suplémentaire',
    },
    personalAssistanceService: {
      organization: 'Nom de organisme',
      personalAssistance: ['à la toilette', 'à la douche', 'à la préparation des repas', 'à la prise de repas', 'aux courses', 'au lever', 'à l\'entretien du logement'],
      intervention: ['Matin', 'Déjeuner', 'Après-midi', 'Diner', 'Soir'],
      financialHelp: false,
      numberHour: 'Nombre d\'heure que vous bénéficier',
      content: 'information suplémentaire',
    },
  },
  recap: {
    contact: {
      firstname: '',
      lastname: '',
      maidenName: '',
      mail: '',
      adress: '',
      zipCode: 0,
      city: '',
      phoneNumber: '',
      content: '',
      preferency: true,
      createdAt: '',
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
      zipCodeOfDeceased: 0,
      cityOfDeceased: '',
      dateOfBirth: '',
      placeOfBirth: '',
      dateOfDeceased: '',
      placeOfDeceased: '',
      postalCode: 0,
    },
    babysittingService: {
      content: '',
      days: [],
      intervention: [],
      numberChild: 0,
      numberHour: 0,
    },
    housekeeping: {
      content: '',
      frequency: [],
      numberHour: 0,
    },
    personalAssistanceService: {
      content: '',
      organization: '',
      personalAssistance: [],
      intervention: [],
      financialHelp: false,
      numberHour: '',
    },
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_VALUE:
      const resultKey = action.key;
      let resultValue = action.value;
      if (resultKey === 'zipCode') {
        const IntValue = parseInt(resultValue, 10);
        resultValue = IntValue;
      }

      return {
        ...state,
        recap: {
          ...state.recap,
          contact: {
            ...state.recap.contact,
            [resultKey]: resultValue,
          },
        },
      };
    case SERVICE_SELECTED:
      return {
        ...state,
        [action.key]: action.selected,
        recap: {
          contact: {
            ...state.recap.contact,
          },
          [action.selected]: {
            ...state.recap[action.selected],
          },
        },
      };
    case CHANGE_ADMINISTRATIVE_DEPARTMENT:
      const resultKeyAdmin = action.key;
      let resultValueAdmin = action.selected;
      if (resultKeyAdmin === 'postalCode' || resultKeyAdmin === 'zipCodeOfDeceased') {
        const IntValue = parseInt(resultValueAdmin, 10);
        resultValueAdmin = IntValue;
      }
      return {
        ...state,
        recap: {
          ...state.recap,
          administrativeDepartment: {
            ...state.recap.administrativeDepartment,
            [resultKeyAdmin]: resultValueAdmin,
          },
        },
      };
    case CHANGE_BABYSITTING:
      return {
        ...state,
        recap: {
          ...state.recap,
          babysittingService: {
            ...state.recap.babysittingService,
            [action.key]: action.selected,
          },
        },
      };
    case CHANGE_BABYSITTING_CHECK:
      return {
        ...state,
        recap: {
          ...state.recap,
          babysittingService: {
            ...state.recap.babysittingService,
            [action.key]: [...state.recap.babysittingService[action.key], action.selected],
          },
        },
      };
    case CHANGE_BABYSITTING_UNCHECK:
      return {
        ...state,
        recap: {
          ...state.recap,
          babysittingService: {
            ...state.recap.babysittingService,
            [action.key]: [...state.recap.babysittingService[action.key]].filter((item) => item !== action.selected),
          },
        },
      };
    case CHANGE_BABYSITTING_TEXTAREA:
      return {
        ...state,
        recap: {
          ...state.recap,
          babysittingService: {
            ...state.recap.babysittingService,
            [action.key]: action.selected,
          },
        },
      };
    case CHANGE_HOUSEKEEPING_NUMBER_HOUR:
      return {
        ...state,
        recap: {
          ...state.recap,
          housekeeping: {
            ...state.recap.housekeeping,
            [action.key]: action.selected,
          },
        },
      };
    case CHANGE_HOUSEKEEPING_FREQUENCY:
      return {
        ...state,
        recap: {
          ...state.recap,
          housekeeping: {
            ...state.recap.housekeeping,
            [action.key]: [action.selected],
          },
        },
      };
    case CHANGE_HOUSEKEEPING_TEXTEAREA:
      return {
        ...state,
        recap: {
          ...state.recap,
          housekeeping: {
            ...state.recap.housekeeping,
            [action.key]: action.selected,
          },
        },
      };
    case CHANGE_PERSONNAL_ASSISTANCE_CHECK:
      return {
        ...state,
        recap: {
          ...state.recap,
          personalAssistanceService: {
            ...state.recap.personalAssistanceService,
            [action.key]: [...state.recap.personalAssistanceService[action.key], action.selected],
          },
        },
      };
    case CHANGE_PERSONNAL_ASSISTANCE_UN_CHECK:
      return {
        ...state,
        recap: {
          ...state.recap,
          personalAssistanceService: {
            ...state.recap.personalAssistanceService,
            [action.key]: [...state.recap.personalAssistanceService[action.key]].filter((item) => item !== action.selected),
          },
        },
      };
    case CHANGE_PERSONNAL_ASSISTANCE_ORGANIZATION:
      return {
        ...state,
        recap: {
          ...state.recap,
          personalAssistanceService: {
            ...state.recap.personalAssistanceService,
            [action.key]: action.selected,
          },
        },
      };
    case CHANGE_PERSONNAL_ASSISTANCE_NUMBER_HOUR:
      return {
        ...state,
        recap: {
          ...state.recap,
          personalAssistanceService: {
            ...state.recap.personalAssistanceService,
            [action.key]: action.selected,
          },
        },
      };
    case CHANGE_PERSONNAL_ASSISTANCE_FINANCIAL_HELP:
      return {
        ...state,
        recap: {
          ...state.recap,
          personalAssistanceService: {
            ...state.recap.personalAssistanceService,
            [action.key]: action.selected,
          },
        },
      };
    case CHANGE_PERSONNAL_ASSISTANCE_TEXTAREA:
      return {
        ...state,
        recap: {
          ...state.recap,
          personalAssistanceService: {
            ...state.recap.personalAssistanceService,
            [action.key]: action.selected,
          },
        },
      };
    case CHANGE_CONTACT_CREATED_AT:
      return {
        ...state,
        recap: {
          ...state.recap,
          contact: {
            ...state.recap.contact,
            [action.key]: action.selected,
          },
        },
      };
    case ACTION_NEW_DATE_FOR:
      return {
        ...state,
        recap: {
          ...state.recap,
          administrativeDepartment: {
            ...state.recap.administrativeDepartment,
            [action.key]: action.selected,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
