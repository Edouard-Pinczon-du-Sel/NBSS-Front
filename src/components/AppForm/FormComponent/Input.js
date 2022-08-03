import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function Input({
  inputName, action, placeHolderValue, value, classNameValue,
}) {
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
Input.defaultProps = {
  value: undefined,
};
Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  placeHolderValue: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  action: PropTypes.func.isRequired,
  classNameValue: PropTypes.string.isRequired,
};

export default Input;
