import { useDispatch } from 'react-redux';

function TextArea({ name, value, placeholder, action }) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(action(event.target.name, event.target.value));
  };
  return (
    <textarea
      className="form--garde__input"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default TextArea;
