// == Import
import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant
function Service({
  id,
  name,
  link,
  alt,
  description,
}) {
  return (
    <div className="services--page__service">
      <div className="services--page__service--container">
        <img className="services--page__service--img" src={link} alt={alt} />
        <div className="services--page__service--container--content">
          <h1 className="services--page__service--title">{name}</h1>
          <div className="services--page__services--container--txt">
            <p className="services--page__service--txt">
              {description}
            </p>
          </div>
          <Link to={`service/${id}`}><button className="services--page__service--btn" type="button">Lire la suite</button></Link>
        </div>
      </div>
    </div>
  );
}

Service.propTypes = {
  id: PropTypesLib.string.isRequired,
  name: PropTypesLib.string.isRequired,
  link: PropTypesLib.string.isRequired,
  alt: PropTypesLib.string.isRequired,
  description: PropTypesLib.string.isRequired,
};
// == Export
export default Service;
