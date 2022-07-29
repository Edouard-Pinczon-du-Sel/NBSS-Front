import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../../actions/form';

function Input({ inputName }) {
  // la syntaxe entre [] permet d'accéder à une propriété d'un objet dynamiquement
  // si inputName contient 'firstName' par exemple cela équivaut à state.firstName
  const value = useSelector((state) => state.form.contact.inputName);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(changeValue(event.target.name, event.target.value));
  };
  return (
    <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder={inputName} />
  );
}

export default Input;
