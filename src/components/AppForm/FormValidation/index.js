// == Import
// import PropTypesLib from 'prop-types';
// import { Link } from 'react-router-dom';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormValidation() {
  return (
    <form>
      <div className="form--validation">
        <h1 className="form--validation__title">Validation</h1>
        <div className="form--validation__container--txtarea">
          <label className="form--validation__label" htmlFor="precisions">Quelques choses à nous spécifier en plus ? Des détails, inquiétudes, questions ? </label>
          <textarea className="form--validation__txtarea" type="text" placeholder="N'hésitez pas..." name="precisions" />
          <button className="form--validation__btn" type="submit">Valider et envoyer</button>
        </div>
      </div>
    </form>
  );
}

// == Export
export default FormValidation;
