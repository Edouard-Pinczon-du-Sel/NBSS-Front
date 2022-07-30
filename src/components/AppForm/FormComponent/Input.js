import { useDispatch, useSelector } from 'react-redux';
import { changeContactValue } from '../../../actions/form';

function Input({ inputName }) {
  // console.log('input de :', inputName);
  // la syntaxe entre [] permet d'accéder à une propriété d'un objet dynamiquement
  // si inputName contient 'firstName' par exemple cela équivaut à state.firstName
  const placeholder = useSelector((state) => state.form.contact_placeholder[inputName]);
  const value = useSelector((state) => state.form.contact[inputName]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(changeContactValue(event.target.name, event.target.value));
  };
  return (
    <>
      <label htmlFor={inputName}>{placeholder}</label>
      <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder={placeholder} />
    </>
  );
}

export default Input;
