import { useDispatch } from 'react-redux';
import Option from './Option';

function Select({
  action, defaultValue, name, options,
}) {
  const frequency = {
    'Choix de la fréquence du service': null,
    Hebdomadaire: 1,
    'Fréquence de passage': 2,
    'Une fois par semaine': 3,
    'Une fois par quinzaine': 4,
    'Une fois par mois': 5,
    Ponctuel: 6,
  };
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const valueSelected = event.target.value;
    console.log(valueSelected);
    console.log(Object.prototype.hasOwnProperty.call(frequency, valueSelected) ? frequency[valueSelected] : 'ne correspond pas');
    if (frequency[valueSelected] !== null) {
      dispatch(action('frequency', frequency[valueSelected]));
    }
  };
  return (
    <select className="form--menagers__select--data" onChange={handleChange} defaultValue={defaultValue} name={name}>
      {
        options.map((item) => (
          <Option
            key={item}
            data={item}
            classNameValue="form--menagers__otpion--data"
          />
        ))
      }
    </select>

  );
}

export default Select;
