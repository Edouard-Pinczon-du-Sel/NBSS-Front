// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_JOBS = 'FETCH_JOBS';
export const SAVE_JOBS = 'SAVE_JOBS';

// Action creator => On l'utilise au moment du dispatch()
export function fetchJobs(list) {
  return {
    type: FETCH_JOBS,
    list: list,
  };
}

export function saveJobs(listData) {
  return {
    type: SAVE_JOBS,
    list: listData,
  };
}
