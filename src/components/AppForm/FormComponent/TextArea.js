import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function TextArea({ name, value, placeHolderValue, action }) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(action(event.target.name, event.target.value));
  };
  return (
    <textarea
      className="form--garde__input"
      value={value}
      name={name}
      placeholder={placeHolderValue}
      onChange={handleChange}
    />
  );
}
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeHolderValue: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
export default TextArea;
