import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

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

InputNumber.defaultProps = {
  value: undefined,
};
InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  placeHolderValue: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  classNameValue: PropTypes.string.isRequired,
};

export default InputNumber;
