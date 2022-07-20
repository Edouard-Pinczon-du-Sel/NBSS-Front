// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function HeaderNavBar() {
  return (
    <div className="headerNavbar-container">
      <ul className="headerNavbar-container-list">
        <li className="headerNavbar-container-item">Accueil</li>
        <li className="headerNavbar-container-item">Nos Services</li>
        <li className="headerNavbar-container-item">Nous Recrutons</li>
        <li className="headerNavbar-container-item">Contact</li>
      </ul>
    </div>
  );
}

// == Export
export default HeaderNavBar;
