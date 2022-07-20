// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function HeaderTop() {
  return (
    <div className="headerTop-container">
      <div className="headerTop-container-logo">
        <img src="https://fakeimg.pl/40/" alt="fake logo" />
      </div>
      <div>nb services et soins</div>
    </div>
  );
}

// == Export
export default HeaderTop;
