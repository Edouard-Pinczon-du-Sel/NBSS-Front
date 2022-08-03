// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import JobsList from './JobsList';
import SpontaneousApplication from './SpontaneousApplication';
import './stylesMediaQueries.scss';
// import data from '../../data/jobs';

// == Composant
function JobsPage() {
  const { list } = useSelector((state) => state.jobs);
  if (list != null) {
    return (
      <main className="main">
        <div className="preview">
          <SpontaneousApplication />
          <div className="job__list">
            {
            list.map((item) => (
              <JobsList
                key={item.id}
                title={item.title}
                weSearch={item.we_search}
                id={item.id}
              />
            ))
          }
          </div>
        </div>
      </main>
    );
  }
}

// == Export
export default JobsPage;
