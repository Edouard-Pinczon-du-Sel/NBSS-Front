// == Import
import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant
function ServicesPreviews({
  id,
  name,
  link,
  alt,
}) {
  return (
    <div className="services">
      <div className="services__container">
        <h1 className="services__title">{name}</h1>
        <img className="services__img" src={link} alt={alt} />
        <Link to={`services/service/${id}`}><button className="services__btn" type="button">Consulter</button></Link>
      </div>
    </div>
  );
}

ServicesPreviews.propTypes = {
  id: PropTypesLib.string.isRequired,
  name: PropTypesLib.string.isRequired,
  link: PropTypesLib.string.isRequired,
  alt: PropTypesLib.string.isRequired,
};
// == Export
export default ServicesPreviews;
