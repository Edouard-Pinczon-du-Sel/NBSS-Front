// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import JobSpecificDetail from './JobSpecificDetail';
import './stylesMediaQueries.scss';

// == Composant
function JobsDetails() {
  const param = useParams();
  const dataJobs = useSelector(
    (state) => state.jobs.list.find((jobs) => jobs.id === param.id),
  );
  // console.log(dataService);
  return (
    <main className="main">
      {[dataJobs].map((item) => (
        <JobSpecificDetail
          key={item.id}
          title={item.title}
          {...item}
        />
      ))}
    </main>
  );
}

// == Export
export default JobsDetails;
