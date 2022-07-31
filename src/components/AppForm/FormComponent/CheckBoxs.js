import { useDispatch } from 'react-redux';
import { changeBabySittingCheck, changeBabySittingUnCheck } from '../../../actions/form';

function Checkboxs({ name, data }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const days = {
      Lundi: 1,
      Mardi: 2,
      Mercredi: 3,
      Jeudi: 4,
      Vendredi: 5,
    };
    const intervention = {
      Matin: 1,
      Déjeuner: 2,
      'Après-midi': 3,
      Diner: 4,
      Soir: 5,
    };
    const newValue = event.target.value;
    if (event.target.checked) {
      console.log(Object.prototype.hasOwnProperty.call(days, newValue));
      console.log(Object.prototype.hasOwnProperty.call(intervention, newValue));
      console.log('event.target.value is checked =>', event.target.value);
      console.log('event.target.name is checked =>', event.target.name);
      if (Object.prototype.hasOwnProperty.call(days, newValue)) {
        console.log(days[newValue]);
        dispatch(changeBabySittingCheck(event.target.name, days[newValue]));
      }
      else {
        dispatch(changeBabySittingCheck(event.target.name, intervention[newValue]));
      }
    }
    else {
      console.log(Object.prototype.hasOwnProperty.call(days, newValue));
      console.log(Object.prototype.hasOwnProperty.call(intervention, newValue));
      console.log('event.target.value is checked =>', event.target.value);
      console.log('event.target.name is checked =>', event.target.name);
      if (Object.prototype.hasOwnProperty.call(days, newValue)) {
        console.log(days[newValue]);
        dispatch(changeBabySittingUnCheck(event.target.name, days[newValue]));
      }
      else {
        dispatch(changeBabySittingUnCheck(event.target.name, intervention[newValue]));
      }
    }
  };
  return (
    <div className="form--garde__container--checkbox">
      <div className="form--garde__container--label">
        <label htmlFor={name}>{data}</label>
        <input className="form--garde__checkbox" type="checkbox" name={name} onChange={handleChange} value={data} />
      </div>
    </div>
  );
}

export default Checkboxs;
