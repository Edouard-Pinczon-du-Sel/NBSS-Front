// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import { NavLink } from 'react-router-dom';
// == Composant
function HeaderNavBar() {
  return (
    <div className="nav nav__responsive--display">
      <NavLink className="nav__btn" to="/">
        Accueil
      </NavLink>
      <NavLink className="nav__btn" to="/services">
        Nos Services
      </NavLink>
      <NavLink className="nav__btn" to="/emplois">
        Nous recrutons
      </NavLink>
      <NavLink className="nav__btn" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}

// == Export
export default HeaderNavBar;
