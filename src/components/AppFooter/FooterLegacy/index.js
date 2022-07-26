// == Import
// import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant
function FooterLegacy() {
  return (
    <>
      <hr className="legacy__border" />
      <div className="legacy">
        <Link to="/mentions-legales"><a className="legacy__link" href="#">Mentions Légales</a></Link>
        <a className="legacy__link" href="#">Copyright NB Services et Soins</a>
        <a className="legacy__link" href="#">Plan du site</a>
      </div>
    </>
  );
}

// == Export
export default FooterLegacy;
