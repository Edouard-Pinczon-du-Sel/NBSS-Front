import { useDispatch } from 'react-redux';

function Input({ inputName, action, placeHolderValue ,value }) {
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
