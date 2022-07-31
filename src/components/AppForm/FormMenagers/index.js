// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import './stylesMediaQueries.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InputNumber from '../FormComponent/InputNumber';
import { changeHouseKeepingFrequency, changeHouseKeepingNumberHour, changeHouseKeepingTextArea } from '../../../actions/form';
import Select from '../FormComponent/Select';
import TextArea from '../FormComponent/TextArea';

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
        <Select
          action={changeHouseKeepingFrequency}
          defaultValue={housekeeping.frequency[0]}
          name="frequency"
          options={housekeeping.frequency}
        />
        <h2 className="form--garde__subtitle">Information complémentaire</h2>
        <TextArea
          name="content"
          value={housekeepingRecap.content}
          placeHolderValue={housekeeping.content}
          action={changeHouseKeepingTextArea}
        />
      </div>
      <Link to="/services/form/validation"><button className="form--menagers__btn" type="submit">Suivant</button></Link>
    </div>
  );
}

// == Export
export default FormMenagers;
