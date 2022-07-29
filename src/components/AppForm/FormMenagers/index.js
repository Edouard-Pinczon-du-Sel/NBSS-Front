// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormMenagers() {
  return (
    <div className="form--menagers">
      <h1 className="form--menagers__title">Services ménagers</h1>
      <div className="form--menagers__container--input">
        <input className="form--menagers__input" type="number" placeholder="Nombre d'heure(s) souhaitée(s)" />
        <select className="form--menagers__select--data">
          <option className="form--menagers__otpion--data">Choix de la fréquence du service</option>
          <option className="form--menagers__otpion--data">Une fois par semaine</option>
          <option className="form--menagers__otpion--data">Une tous les 15 jours</option>
        </select>
      </div>
      <select className="form--menagers__select">
        <option className="form--menagers__otpion">------</option>
        <option className="form--menagers__otpion">Service 1</option>
        <option className="form--menagers__otpion">Service 2</option>
        <option className="form--menagers__otpion">Service 3</option>
        <option className="form--menagers__otpion">Service 4</option>
      </select>
    </div>
  );
}

// == Export
export default FormMenagers;
