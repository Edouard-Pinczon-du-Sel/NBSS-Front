import { useDispatch } from 'react-redux';

function Checkboxs({ data }) {
  // const value = useSelector((state) => state.form.recap.contact[inputName]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
  };
  return (
    <div className="form--garde__container--checkbox">
      <div className="form--garde__container--label">
        <label htmlFor={data}>{data}</label>
        <input className="form--garde__checkbox" type="checkbox" name={data} onChange={handleChange} />
      </div>
    </div>
  );
}

export default Checkboxs;
