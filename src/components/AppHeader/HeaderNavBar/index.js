// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function HeaderNavBar() {
  return (
    <div className="nav nav__responsive--display">
      {/*<NavLink className={({isActive}) => isActive ? 'current' : ''} to="/contact">Contactez-nous</NavLink>*/}
      <button className="nav__btn" type="button">Accueil</button>
      <button className="nav__btn" type="button">Nos Services</button>
      <button className="nav__btn" type="button">Nous recrutons</button>
      <button className="nav__btn" type="button">Contact</button>
    </div>
  );
}

// == Export
export default HeaderNavBar;
