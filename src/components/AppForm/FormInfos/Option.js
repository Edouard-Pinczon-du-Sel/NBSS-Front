function Option( { value } ) {
  return (
    <option className="form--infos__option" value={value}>{value}</option>
  );
}

export default Option;
