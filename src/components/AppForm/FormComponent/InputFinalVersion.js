import { useDispatch } from 'react-redux';

function InputFinalVersion({ inputName, func }) {
  console.log(func);
  // console.log('input de :', inputName);
  // la syntaxe entre [] permet d'accéder à une propriété d'un objet dynamiquement
  // si inputName contient 'firstName' par exemple cela équivaut à state.firstName
  // const placeholder = useSelector((state) => state.form.contact_placeholder[inputName]);
  // const value = useSelector((state) => state.form.contact[inputName]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(func(event.target.name, event.target.value));
  };
  return (
    <>
      <label htmlFor={inputName.id}>{inputName.placeholder}</label>
      <input className="form--infos__input" type="text" value={inputName.value} name={inputName.id} onChange={handleChange} placeholder={inputName.placeholder} />
    </>
  );
}

export default InputFinalVersion;
