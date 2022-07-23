// == Import
// import PropTypesLib from 'prop-types';
import './stylesMediaQueries.scss';

// == Composant
import FooterMap from './FooterMap';
import FooterContact from './FooterContact';
import FooterHoraires from './FooterHoraires';
import FooterLegacy from './FooterLegacy';

function AppFooter() {
  return (
    <>
      <footer className="footer">
        <FooterMap />
        <FooterContact />
        <FooterHoraires />
      </footer>
      <FooterLegacy />
    </>
  );
}

// == Export
export default AppFooter;
