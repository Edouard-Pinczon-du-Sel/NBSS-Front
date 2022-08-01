/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import {
  CHANGE_ADMINISTRATIVE_DEPARTMENT,
  CHANGE_BABYSITTING,
  CHANGE_BABYSITTING_CHECK,
  CHANGE_BABYSITTING_TEXTAREA,
  CHANGE_BABYSITTING_UNCHECK,
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
      content: "N'hésitez pas...",
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
      days: [], // d'après le back 1 = lundi, 2 = mardi donc on doit leur envoyer days: [1,2] dans le cas ou les deux premier jour de la semaine sont selectionner.
      intervention: [], // idem que pour les jours
      numberChild: 0, // renvoie d'un INT
      numberHour: 0, // renvoie d'un INT
    },
    housekeeping: {
      content: '',
      frequency: [], // Hebdomadaire = 1 , Une fois par semaine = 2, Deux fois par mois = 3, Une fois par mois = 4, Ponctuellement = 5
      numberHour: 0, // INT
    },
    personalAssistanceService: {
      content: '',
      organization: '',
      personalAssistance: [],
      days: [],
      intervention: [],
      financialHelp: false,
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
            [action.key]: action.selected,
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
    default:
      return state;
  }
};

export default reducer;
