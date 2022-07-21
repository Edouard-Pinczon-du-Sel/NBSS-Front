// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function FooterLegacy() {
  return (
    <div className="legacy">
      <div className="legacy__border" />
      <a className="legacy__link" href="#">Mentions Légales</a>
      <a className="legacy__link" href="#">Copyright NB Services et Soins</a>
      <a className="legacy__link" href="#">Plan du site</a>
    </div>
  );
}

// == Export
export default FooterLegacy;
