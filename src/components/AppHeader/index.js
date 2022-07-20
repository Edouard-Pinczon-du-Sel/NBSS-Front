// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
import HeaderTop from './HeaderTop';
import HeaderNavBar from './HeaderNavBar';

function AppHeader() {
  return (
    <div>
      <HeaderTop />
      <HeaderNavBar />
    </div>
  );
}

// == Export
export default AppHeader;
