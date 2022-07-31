// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeBabySitting } from '../../../actions/form';
import Checkboxs from '../FormComponent/CheckBoxs';
import InputNumber from '../FormComponent/InputNumber';
import TextArea from '../FormComponent/TextArea';
import './styles.scss';
import './stylesMediaQueries.scss';

function FormGarde() {
  const babysittingService = useSelector((state) => state.form.miseEnPage.babysittingService);
  const babysittingServiceRecap = useSelector((state) => state.form.recap.babysittingService);
  console.log(babysittingServiceRecap);
  return (
    <div className="form--garde">
      <h1 className="form--garde__title">Service garde enfants</h1>
      <div className="form--garde__container--input">
        <InputNumber
          name="numberHour"
          value={babysittingServiceRecap.numberHour}
          placeHolderValue={babysittingService.numberHour}
          action={changeBabySitting}
        />
        <InputNumber
          name="numberChild"
          value={babysittingServiceRecap.numberChild}
          placeHolderValue={babysittingService.numberChild}
          action={changeBabySitting}
        />
        <h2 className="form--garde__subtitle">Jours d'intervention</h2>
        <div className="form--garde__container--checkbox">
          {babysittingService.days.map((data) => <Checkboxs key={data} data={data} />)}
        </div>
        <h2 className="form--garde__subtitle">Moment d'intervention</h2>
        <div className="form--garde__container--checkbox">
          {babysittingService.intervention.map((data) => <Checkboxs key={data} data={data} />)}
        </div>
        <h2 className="form--garde__subtitle">Information complémentaire</h2>
        <TextArea />
      </div>
      <Link to="/services/form/validation"><button className="form--menagers__btn" type="submit">Suivant</button></Link>
    </div>
  );
}

// == Export
export default FormGarde;
