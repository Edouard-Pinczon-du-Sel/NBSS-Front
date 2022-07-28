// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormInfos() {
  return (
    <div className="form--infos">
      <h1 className="form--infos__title">Vos informations personnelles</h1>
      <div className="form--infos__container--input">
        <input className="form--infos__input" type="text" placeholder="Nom" />
        <input className="form--infos__input" type="text" placeholder="Prénom" />
        <input className="form--infos__input" type="text" placeholder="Adresse" />
        <input className="form--infos__input" type="text" placeholder="Téléphone" />
        <input className="form--infos__input" type="text" placeholder="E-mail" />
      </div>
      <select className="form--infos__select">
        <option className="form--infos__otpion">------</option>
        <option className="form--infos__otpion">Service 1</option>
        <option className="form--infos__otpion">Service 2</option>
        <option className="form--infos__otpion">Service 3</option>
        <option className="form--infos__otpion">Service 4</option>
      </select>
    </div>
  );
}

// == Export
export default FormInfos;
