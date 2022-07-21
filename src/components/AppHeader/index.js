// == Import
// import PropTypesLib from 'prop-types';
// == Composant
import HeaderTop from './HeaderTop';
import HeaderNavBar from './HeaderNavBar';

function AppHeader() {
  return (
    <div className="top__header">
      <HeaderTop />
      <HeaderNavBar />
    </div>
  );
}

// == Export
export default AppHeader;
