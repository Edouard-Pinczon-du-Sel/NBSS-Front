import { useDispatch, useSelector } from 'react-redux';
import { serviceSelected } from '../../../actions/form';

function SelectService() {
  // const serviceList = useSelector((state) => state.form.serviceList);
  const selected = useSelector((state) => state.form.serviceSelected);
  const serviceList = useSelector((state) => state.form.servicesForm);
  console.log(selected);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    console.log(event.currentTarget);
    const valueSelecteed = event.target.value;
    dispatch(serviceSelected('serviceSelected', valueSelecteed));
  };
  return (
    <select className="form--infos__select" onChange={handleChange} value={selected} name="services">
      {
        serviceList.map((item) => <option key={item.id} className="form--infos__option" id={item.id} value={item.index} name={item.index}>{item.text}</option>)
      }
    </select>

  );
}

export default SelectService;
