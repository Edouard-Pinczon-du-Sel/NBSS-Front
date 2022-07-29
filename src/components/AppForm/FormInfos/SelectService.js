import { useDispatch, useSelector } from 'react-redux';
import { serviceSelected } from '../../../actions/form';

function SelectService({ value }) {
  const serviceList = useSelector((state) => state.form.serviceList);
  const selected = useSelector((state) => state.form.serviceSelected);
  console.log(selected);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    console.log(event.currentTarget);
    const valueSelecteed = event.target.value;
    dispatch(serviceSelected('serviceSelected', valueSelecteed));
  };
  return (
    <select className="form--infos__select" onChange={handleChange} value={selected} name="services">
      <option className="form--infos__option"> --Choix du service-- </option>
      {
        Object.keys(serviceList).map((index, key) => <option key={key} className="form--infos__option" id={key} value={index} name={index}>{index}</option>)
      }
    </select>

  );
}

export default SelectService;
