export const CHANGE_CONTACT_VALUE = 'CHANGE_CONTACT_VALUE';
export const SERVICE_SELECTED = 'SERVICE_SELECTED';
export const CHANGE_IN_CHARGE_PERSON = 'CHANGE_IN_CHARGE_PERSON';
export const CHANGE_INF_DECEASED_PERSON = 'CHANGE_INF_DECEASED_PERSON';

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

export const changeinfChargePerson = (key, selected) => ({
  type: CHANGE_IN_CHARGE_PERSON,
  key: key,
  selected: selected,
});

export const changeInfDeceasedPerson = (key, selected) => ({
  type: CHANGE_INF_DECEASED_PERSON,
  key: key,
  selected: selected,
});
