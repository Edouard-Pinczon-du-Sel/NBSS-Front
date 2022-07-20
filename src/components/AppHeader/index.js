// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
import HeaderTop from './HeaderTop';
import HeaderNavBar from './HeaderNavBar';
import HeaderCarousel from './HeaderCarousel';

function AppHeader() {
  return (
    <div>
      <HeaderTop />
      <HeaderNavBar />
      <HeaderCarousel />
    </div>
  );
}

// == Export
export default AppHeader;
