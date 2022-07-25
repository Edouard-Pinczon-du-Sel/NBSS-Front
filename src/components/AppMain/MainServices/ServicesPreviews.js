// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function ServicesPreviews({ name, link, alt }) {
  return (
    <div className="services">
      <div className="services__container">
        <h1 className="services__title">{name}</h1>
        <img className="services__img" src={link} alt={alt} />
        <button className="services__btn" type="button">Consulter</button>
      </div>
    </div>
  );
}

// == Export
export default ServicesPreviews;
