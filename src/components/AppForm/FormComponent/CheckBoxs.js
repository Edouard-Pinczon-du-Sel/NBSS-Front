function Checkboxs({ data }) {
  // const value = useSelector((state) => state.form.recap.contact[inputName]);
  // const dispatch = useDispatch();
  // const handleChange = (event) => {
  // dispatch(action(event.target.name, event.target.value));
  return (
    <div className="form--garde__container--checkbox">
      <div className="form--garde__container--label">
        <label htmlFor={data}>{data}</label>
        <input className="form--garde__checkbox" type="checkbox" name={data} />
      </div>
    </div>
  );
}

export default Checkboxs;
