export const CHANGE_CONTACT_VALUE = 'CHANGE_CONTACT_VALUE';
export const SERVICE_SELECTED = 'SERVICE_SELECTED';

export const changeContactValue = (key, value) => ({
  type: CHANGE_CONTACT_VALUE,
  key: key,
  value: value,
});

export const serviceSelected = (key, selected) => ({
  type: SERVICE_SELECTED,
  key: key,
  selected: selected,
});
