import { useDispatch } from 'react-redux';

function InputNumber({ name, value, placeHolderValue, action }) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(action(event.target.name, event.target.value));
    console.log(event.target.name, parseInt(event.target.value));
  };
  return (
    <>
      <label htmlFor={name}>{placeHolderValue}</label>
      <input className="form--garde__input" type="number" value={value} name={name} onChange={handleChange} placeholder={placeHolderValue} />
    </>
  );
}

export default InputNumber;
