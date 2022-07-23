// == Import
// import PropTypesLib from 'prop-types';
// == Composant
import HeaderTop from './HeaderTop';
import HeaderNavBar from './HeaderNavBar';

function AppHeader() {
  return (
    <header className="top__header">
      <HeaderTop />
      <HeaderNavBar />
    </header>
  );
}

// == Export
export default AppHeader;
