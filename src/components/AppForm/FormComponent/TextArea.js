import { useDispatch } from 'react-redux';

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

export default TextArea;
