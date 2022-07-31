import { useDispatch, useSelector } from 'react-redux';

function Input({ inputName, action, placeHolderValue }) {
  const value = useSelector((state) => state.form.recap.contact[inputName]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(action(event.target.name, event.target.value));
  };
  return (
    <>
      <label htmlFor={inputName}>{placeHolderValue}</label>
      <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder={placeHolderValue} />
    </>
  );
}

export default Input;
