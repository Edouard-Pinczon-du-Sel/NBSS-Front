// == Import
// import PropTypesLib from 'prop-types';
import MainCarousel from './MainCarousel';
import MainServices from './MainServices';
import './stylesMediaQueries.scss';

// == Composant
function AppMain() {
  return (
    <div>
      <MainCarousel />
      <MainServices />
    </div>
  );
}

// == Export
export default AppMain;
