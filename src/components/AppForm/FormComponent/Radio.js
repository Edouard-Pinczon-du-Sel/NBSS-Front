/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function Radio({ action }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newValue = event.target.value;
    const { checked } = event.target;
    // console.log(`value = ${newValue}`, newValue === 'non' ? `isChecked = ${!checked}` : `isChecked = ${checked}`);
    const value = newValue === 'non' ? !checked : checked;
    dispatch(action('financialHelp', value));
  };
  return (
    <fieldset>
      <div className="form--personne__container--radio">
        <div className="form--personne__container--label">
          <label htmlFor="moment">Oui</label>
          <input className="form--personne__checkbox" type="radio" value="oui" name="moment" onClick={handleChange} />
        </div>
        <div className="form--personne__container--label">
          <label htmlFor="moment">Non</label>
          <input className="form--personne__checkbox" type="radio" defaultChecked value="non" name="moment" onClick={handleChange} />
        </div>
      </div>
    </fieldset>
  );
}

Radio.propTypes = {
  action: PropTypes.func.isRequired,
};

export default Radio;
