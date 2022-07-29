// == Import
// import PropTypesLib from 'prop-types';
// import { Link } from 'react-router-dom';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormValidation() {
  return (
    <div className="form--validation">
      <h1 className="form--validation__title">Vos informations personnelles</h1>
      <div className="form--validation__container--input">
        <textarea className="form--validation__input" type="text" placeholder="Nom" />
        <button type="submit">Valider et envoyer</button>
      </div>
    </div>
  );
}

// == Export
export default FormValidation;
