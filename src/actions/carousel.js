// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_CAROUSEL = 'FETCH_CAROUSEL';
export const SAVE_CAROUSEL = 'SAVE_CAROUSEL';

// Action creator => On l'utilise au moment du dispatch()
export function fetchCarousel() {
  return {
    type: FETCH_CAROUSEL,
  };
}
export function saveCarousel(listData) {
  return {
    type: SAVE_CAROUSEL,
    list: listData,
  };
}
