// == Import
// import PropTypesLib from 'prop-types';
import JobsList from './JobsList';
import SpontaneousApplication from './SpontaneousApplication';
import './stylesMediaQueries.scss';

// == Composant
function JobsPage() {
  return (
    <main className="main">
      <div className="preview">
        <SpontaneousApplication />
        <JobsList />
      </div>
    </main>
  );
}

// == Export
export default JobsPage;
