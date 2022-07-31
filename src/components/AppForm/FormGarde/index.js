// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Checkboxs from '../FormComponent/CheckBoxs';
import InputNumber from '../FormComponent/InputNumber';
import TextArea from '../FormComponent/TextArea';
import './styles.scss';
import './stylesMediaQueries.scss';
// TODO maper sur les checkbox depuis les donées de l'api du back
// == Composant
function FormGarde() {
  const babysittingService = useSelector((state) => state.form.miseEnPage.babysittingService);
  // console.log(daysData);
  return (
    <div className="form--garde">
      <h1 className="form--garde__title">Service garde enfants</h1>
      <div className="form--garde__container--input">
        <InputNumber placeHolderValue={babysittingService.numberHour} />
        <InputNumber placeHolderValue={babysittingService.numberChild} />
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
