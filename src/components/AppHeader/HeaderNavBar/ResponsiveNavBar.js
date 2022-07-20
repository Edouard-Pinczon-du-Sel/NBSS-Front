// == Import
// import PropTypesLib from 'prop-types';
import './responsiveStyles.scss';

// == Composant
function ResponsiveNavBar() {
  return (
    <div className="nav__responsive nav__responsive--display">
      <button className="nav__responsive--btn" type="button">Accueil</button>
      <button className="nav__responsive--btn" type="button">Nos Services</button>
      <button className="nav__responsive--btn" type="button">Nous recrutons</button>
      <button className="nav__responsive--btn" type="button">Contact</button>
    </div>
  );
}

// == Export
export default ResponsiveNavBar;
