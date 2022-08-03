// == Import
// import PropTypesLib from 'prop-types';
import logo from 'src/assets/images/img-logo/LOGO-NBSS-blanc.png';
import titreImg from 'src/assets/images/img-logo/titreImg.png';
import './styles.scss';
import './burger.scss';

// == Composant
function HeaderTop() {
  function handleDisplay() {
    const responsiveNavBar = document.querySelector('.nav');
    responsiveNavBar.classList.toggle('nav__responsive--display');
  }
  return (
    <div className="header">
      <div className="header__band">
        <img className="header__logo" src={logo} alt="logo" />
        <img className="header__title" src={titreImg} alt="rien" />
        <div id="webapp_cover">
          <div id="menu_button">
            <input type="checkbox" id="menu_checkbox" onClick={handleDisplay} />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="menu_checkbox" id="menu_label">
              <div id="menu_text_bar" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default HeaderTop;
