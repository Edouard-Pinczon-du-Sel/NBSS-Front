import { createStore } from 'redux';
import reducer from '../reducers';

// la fonction me retourne mon objet store
const store = createStore(reducer);

// que je peux exporter pour m'en servir ailleurs
export default store;
