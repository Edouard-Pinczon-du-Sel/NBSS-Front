/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch } from 'react-redux';

function Radio() {
  // const dispatch = useDispatch();

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (event.target.checked) {
      console.log(newValue);
    }
  };
  return (
    <fieldset>
      <legend />
      <div className="form--personne__container--radio">
        <div className="form--personne__container--label">
          <label htmlFor="moment">Oui</label>
          <input className="form--personne__checkbox" type="radio" value="oui" name="moment" onClick={handleChange} />
        </div>
        <div className="form--personne__container--label">
          <label htmlFor="moment">Non</label>
          <input className="form--personne__checkbox" type="radio" value="non" name="moment" onClick={handleChange} checked />
        </div>
      </div>
    </fieldset>
  );
}

export default Radio;
