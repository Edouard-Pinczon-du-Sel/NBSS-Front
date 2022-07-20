// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
import FooterMap from './FooterMap';
import FooterContact from './FooterContact';
import FooterHoraires from './FooterHoraires';
import FooterLegacy from './FooterLegacy';

function AppFooter() {
  return (
    <div>
      <FooterMap />
      <FooterContact />
      <FooterHoraires />
      <FooterLegacy />
    </div>
  );
}

// == Export
export default AppFooter;
