export const CHANGE_CONTACT_VALUE = 'CHANGE_CONTACT_VALUE';
export const SERVICE_SELECTED = 'SERVICE_SELECTED';
export const CHANGE_ADMINISTRATIVE_DEPARTMENT = 'CHANGE_ADMINISTRATIVE_DEPARTMENT';

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

export const changeAdministrativeDepartment = (key, selected) => ({
  type: CHANGE_ADMINISTRATIVE_DEPARTMENT,
  key: key,
  selected: selected,
});
