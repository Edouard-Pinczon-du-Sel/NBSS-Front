// == Import
// import PropTypesLib from 'prop-types';
import MainCarousel from './MainCarousel';
import MainServices from './MainServices';
import './stylesMediaQueries.scss';

// == Composant
function AppMain() {
  return (
    <div className="main">
      <MainCarousel />
      <div className="preview">
        <MainServices />
      </div>
    </div>
  );
}

// == Export
export default AppMain;
