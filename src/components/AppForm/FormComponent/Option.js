// == Composant
function Option({ data, classNameValue }) {
  return (
    <option
      className={classNameValue}
      id={data}
      value={data}
      name={data}
    >
      {data}
    </option>
  );
}

// == Export
export default Option;
