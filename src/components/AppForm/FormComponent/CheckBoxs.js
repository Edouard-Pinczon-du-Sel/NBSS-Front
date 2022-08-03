import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function Checkboxs({ name, data, checkAction, unCheckAction}) {
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
    const personalAssistance = {
      'à la toilette': 1,
      'à la douche': 2,
      'à la préparation des repas': 3,
      'à la prise de repas': 4,
      'aux courses': 5,
      'au lever': 6,
      'à l\'entretien du logement': 7,
    };
    const newValue = event.target.value;
    // TODO transformer le if en Switch
    if (event.target.checked) {
      console.log(Object.prototype.hasOwnProperty.call(days, newValue));
      console.log(Object.prototype.hasOwnProperty.call(intervention, newValue));
      console.log('event.target.value is checked =>', event.target.value);
      console.log('event.target.name is checked =>', event.target.name);
      if (Object.prototype.hasOwnProperty.call(days, newValue)) {
        console.log(days[newValue]);
        dispatch(checkAction(event.target.name, days[newValue]));
      }
      else if (Object.prototype.hasOwnProperty.call(intervention, newValue)) {
        dispatch(checkAction(event.target.name, intervention[newValue]));
      } else {
        dispatch(checkAction(event.target.name, personalAssistance[newValue]));
      }
    }
    if (!event.target.checked) {
      console.log(Object.prototype.hasOwnProperty.call(days, newValue));
      console.log(Object.prototype.hasOwnProperty.call(intervention, newValue));
      console.log('event.target.value is checked =>', event.target.value);
      console.log('event.target.name is checked =>', event.target.name);
      if (Object.prototype.hasOwnProperty.call(days, newValue)) {
        console.log(days[newValue]);
        dispatch(unCheckAction(event.target.name, days[newValue]));
      }
      else if (Object.prototype.hasOwnProperty.call(intervention, newValue)) {
        dispatch(unCheckAction(event.target.name, intervention[newValue]));
      } else {
        dispatch(unCheckAction(event.target.name, personalAssistance[newValue]));
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

// name, data ,checkAction, unCheckAction
Checkboxs.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  checkAction: PropTypes.func.isRequired,
  unCheckAction: PropTypes.func.isRequired,
};

export default Checkboxs;
