// == Import
// import PropTypesLib from 'prop-types';
import { useSelector /*useDispatch*/ } from 'react-redux';
// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchJobs } from '../../actions/jobs';
import JobSpecificDetail from './JobSpecificDetail';
import './stylesMediaQueries.scss';

// == Composant
function JobsDetails() {
  const param = useParams();
  const dataJobs = useSelector(
    (state) => state.jobs.list.find((jobs) => jobs.id === param.id),
  );

  console.log(dataJobs);
  if (dataJobs != null) {
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
}

// == Export
export default JobsDetails;
