// == Import
// import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
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
      {/* <select className="form--infos__select">
        <option className="form--infos__otpion">Choix du service</option>
        <option className="form--infos__otpion">Service ménagers</option>
        <option className="form--infos__otpion">Service 2</option>
        <option className="form--infos__otpion">Service 3</option>
        <option className="form--infos__otpion">Service 4</option>
      </select> */}
      <h1 className="form--infos__title--choice">Cliquez sur le service de votre choix</h1>
      <div className="form--infos__container--btn">
        <Link to="/services/form/menagers"><button className="form--infos__menagers--btn" type="button">Service ménagers</button></Link>
        <Link to="/services/form/garde"><button className="form--infos__menagers--btn" type="button">Service garde enfants</button></Link>
        <Link to="/services/form/aide"><button className="form--infos__menagers--btn" type="button">Service aide à la personne</button></Link>
        <Link to="/services/form/administratif"><button className="form--infos__menagers--btn" type="button">Service aide administratif</button></Link>
      </div>

    </div>
  );
}

// == Export
export default FormInfos;
