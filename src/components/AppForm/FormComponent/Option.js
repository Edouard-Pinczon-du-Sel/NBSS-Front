import PropTypes from 'prop-types';

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
Option.propTypes = {
  data: PropTypes.string.isRequired,
  classNameValue: PropTypes.string.isRequired,
};
// == Export
export default Option;
