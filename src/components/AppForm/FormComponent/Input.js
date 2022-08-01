import { useDispatch } from 'react-redux';

function Input({ inputName, action, placeHolderValue ,value, classNameValue }) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(action(event.target.name, event.target.value));
  };
  return (
    <>
      <label className={classNameValue} htmlFor={inputName}>{placeHolderValue}</label>
      <input className={classNameValue} type="text" value={value} name={inputName} onChange={handleChange} placeholder={placeHolderValue} />
    </>
  );
}

export default Input;
