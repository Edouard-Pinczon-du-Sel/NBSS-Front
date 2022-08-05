// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_FORM_POST = 'FETCH_FORM_POST';
export const INIT_STATE = 'INIT_STATE';

// Action creator => On l'utilise au moment du dispatch()
export function fetchFormPost(data, key) {
  return {
    type: FETCH_FORM_POST,
    data: data,
    key: key,
  };
}

export function initState() {
  return {
    type: INIT_STATE,
  };
}
