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
  const housekeeping = useSelector((state) => state.form.miseEnPage.housekeeping);
  const housekeepingRecap = useSelector((state) => state.form.recap.housekeeping);
  return (
    <div className="form--menagers">
      <h1 className="form--menagers__title">Services ménagers</h1>
      <div className="form--menagers__container--input">
        <InputNumber
          name="numberHour"
          value={housekeepingRecap.numberHour}
          placeHolderValue={housekeeping.numberHour}
          action={changeHouseKeepingNumberHour}
          classNameValue="form--garde__input"
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
