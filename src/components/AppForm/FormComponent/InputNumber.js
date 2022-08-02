import { useDispatch } from 'react-redux';

function InputNumber({ name, value, placeHolderValue, action, classNameValue }) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(action(event.target.name, parseInt(event.target.value, 10)));
    console.log(event.target.name, parseInt(event.target.value, 10));
  };
  return (
    <>
      <label className={classNameValue} htmlFor={name}>{placeHolderValue}</label>
      <input className={classNameValue} type="number" value={value} name={name} onChange={handleChange} placeholder={placeHolderValue} />
    </>
  );
}

export default InputNumber;
