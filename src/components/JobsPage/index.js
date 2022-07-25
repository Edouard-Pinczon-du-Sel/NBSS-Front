// == Import
// import PropTypesLib from 'prop-types';
import MainServices from './MainServices';
import './stylesMediaQueries.scss';

// == Composant
function JobsPage() {
  return (
    <main className="main">
      <div className="preview">
        <MainServices />
      </div>
    </main>
  );
}

// == Export
export default JobsPage;
