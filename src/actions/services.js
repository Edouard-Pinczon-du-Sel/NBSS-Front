// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_SERVICES = 'FETCH_SERVICES';

// Action creator => On l'utilise au moment du dispatch()
export function fetchServices(list) {
  return {
    type: FETCH_SERVICES,
    list: list,
  };
}
