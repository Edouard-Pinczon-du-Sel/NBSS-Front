// == Import
// import PropTypesLib from 'prop-types';
import JobsList from './JobsList';
import SpontaneousApplication from './SpontaneousApplication';
import './stylesMediaQueries.scss';
import data from '../../data/jobs';

// == Composant
function JobsPage() {
  console.log(data);
  return (
    <main className="main">
      <div className="preview">
        <SpontaneousApplication />
        <div className="job__list">
          {
          data.map((item) => (
            <JobsList
              key={item.id}
              title={item.title}
              weSearch={item.weSearch}
              id={item.id}
            />
          ))
        }
        </div>
      </div>
    </main>
  );
}

// == Export
export default JobsPage;
