// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
import HeaderTop from './HeaderTop';
import ResponsiveNavBar from './HeaderNavBar/ResponsiveNavBar';
import HeaderNavBar from './HeaderNavBar';

function AppHeader() {
  return (
    <div className="top__header">
      <HeaderTop />
      <ResponsiveNavBar />
      <HeaderNavBar />
    </div>
  );
}

// == Export
export default AppHeader;
