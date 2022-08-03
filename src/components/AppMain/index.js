// == Import
// import PropTypesLib from 'prop-types';
import MainCarousel from './MainCarousel';
import MainServices from './MainServices';
import './stylesMediaQueries.scss';

// == Composant
function AppMain() {
  return (
    <main className="main">
      <MainCarousel />
      <div className="preview">
        <MainServices />
      </div>
    </main>
  );
}
export default AppMain;
