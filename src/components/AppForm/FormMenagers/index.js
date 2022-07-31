// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import './stylesMediaQueries.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InputNumber from '../FormComponent/InputNumber';
import { changeHouseKeepingNumberHour } from '../../../actions/form';

// == Composant
function FormMenagers() {
  // TODO Faire les vérifs de formulaire en vanilla ou en champ contrôlés
  // function handleFormVerification(e) {
  //   const hours = document.querySelector('.form--menagers__input');
  //   if (hours.value === '') {
  //     alert("Veuillez remplir tous les champs s'il vous plaît");
  //     e.preventDefault();
  //   }
  //   const frequancy = document.querySelector('.form--menagers__select--data');
  //   console.log(frequancy.value);
  //   e.preventDefault();
  // }
  const housekeeping = useSelector((state) => state.form.miseEnPage.housekeeping);
  const housekeepingRecap = useSelector((state) => state.form.recap.housekeeping);
  return (
    <form>
      <div className="form--menagers">
        <h1 className="form--menagers__title">Services ménagers</h1>
        <div className="form--menagers__container--input">
          {/* <input className="form--menagers__input" type="number" placeholder="Nombre d'heure(s) souhaitée(s)" /> */}
          <InputNumber
            name="numberHour"
            value={housekeepingRecap.numberHour}
            placeHolderValue={housekeeping.numberHour}
            action={changeHouseKeepingNumberHour}
          />
          <select className="form--menagers__select--data">
            <option className="form--menagers__otpion--data">Choix de la fréquence du service</option>
            <option className="form--menagers__otpion--data">Une fois par semaine</option>
            <option className="form--menagers__otpion--data">Une tous les 15 jours</option>
          </select>
        </div>
        <Link to="/services/form/validation"><button className="form--menagers__btn" type="submit" /*</Link>onClick={handleFormVerification}*/>Suivant</button></Link>
      </div>
    </form>
  );
}

// == Export
export default FormMenagers;
