// == Import
import PropTypesLib from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function ServiceSpecificsDetails({
  link,
  alt,
  name,
  explications,
}) {
  return (
    <div className="service--details">
      <img className="service--details__img" src={link} alt={alt} />
      <h1 className="service--details__title">{name}</h1>
      <p className="service--details__txt">
        {explications}
      </p>
      <Link to="/services/form"><button className="service--details__btn" type="button">J'accède à ce service</button></Link>
    </div>
  );
}

ServiceSpecificsDetails.propTypes = {
  link: PropTypesLib.string.isRequired,
  alt: PropTypesLib.string.isRequired,
  name: PropTypesLib.string.isRequired,
  explications: PropTypesLib.string.isRequired,
};
// == Export
export default ServiceSpecificsDetails;
