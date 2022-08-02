// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_FORM_POST = 'FETCH_FORM_POST';

// Action creator => On l'utilise au moment du dispatch()
export function fetchFormPost(data) {
  return {
    type: FETCH_FORM_POST,
    data: data,
  };
}
