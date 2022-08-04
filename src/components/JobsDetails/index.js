// == Import
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import JobSpecificDetail from './JobSpecificDetail';
import './stylesMediaQueries.scss';

// == Composant
function JobsDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const param = useParams();
  const dataJobs = useSelector(
    (state) => state.jobs.list.find((jobs) => jobs.id === parseInt(param.id, 10)),
  );

  if (dataJobs != null) {
    return (
      <main className="main">
        {[dataJobs].map((item) => (
          item.visibility === true
            ? (
              <JobSpecificDetail
                key={item.id}
                title={item.title}
                {...item}
              />
            )
            : ''

        ))}
      </main>
    );
  }
}

// == Export
export default JobsDetails;
