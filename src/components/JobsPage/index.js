// == Import
// import PropTypesLib from 'prop-types';
import JobsList from './JobsList';
import './stylesMediaQueries.scss';

// == Composant
function JobsPage() {
  return (
    <main className="main">
      <div className="preview">
        <JobsList />
      </div>
    </main>
  );
}

// == Export
export default JobsPage;
