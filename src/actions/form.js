export const CHANGE_CONTACT_VALUE = 'CHANGE_CONTACT_VALUE';
export const SERVICE_SELECTED = 'SERVICE_SELECTED';
export const CHANGE_ADMINISTRATIVE_DEPARTMENT = 'CHANGE_ADMINISTRATIVE_DEPARTMENT';
export const CHANGE_BABYSITTING = 'CHANGE_BABYSITTING';
export const CHANGE_BABYSITTING_CHECK = 'CHANGE_BABYSITTING_CHECK';
export const CHANGE_BABYSITTING_UNCHECK = 'CHANGE_BABYSITTING_UNCHECK';
export const CHANGE_BABYSITTING_TEXTAREA = 'CHANGE_BABYSITTING_TEXTAREA';
export const CHANGE_HOUSEKEEPING_NUMBER_HOUR = 'CHANGE_HOUSEKEEPING_NUMBER_HOUR';
export const CHANGE_HOUSEKEEPING_FREQUENCY = 'CHANGE_HOUSEKEEPING_FREQUENCY';
export const CHANGE_HOUSEKEEPING_TEXTEAREA = 'CHANGE_HOUSEKEEPING_TEXTEAREA';
export const CHANGE_PERSONNAL_ASSISTANCE_CHECK = 'CHANGE_PERSONNAL_ASSISTANCE_CHECK';
export const CHANGE_PERSONNAL_ASSISTANCE_UN_CHECK = 'CHANGE_PERSONNAL_ASSISTANCE_UN_CHECK';
export const CHANGE_PERSONNAL_ASSISTANCE_NUMBER_HOUR = 'CHANGE_PERSONNAL_ASSISTANCE_NUMBER_HOUR';
export const CHANGE_PERSONNAL_ASSISTANCE_ORGANIZATION = 'CHANGE_PERSONNAL_ASSISTANCE_ORGANIZATION';

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

export const changeBabySitting = (key, selected) => ({
  type: CHANGE_BABYSITTING,
  key: key,
  selected: selected,
});

export function changeBabySittingCheck(key, selected) {
  return {
    type: CHANGE_BABYSITTING_CHECK,
    key: key,
    selected: selected,
  };
}

export function changeBabySittingUnCheck(key, selected) {
  return {
    type: CHANGE_BABYSITTING_UNCHECK,
    key: key,
    selected: selected,
  };
}

export function changeBabySittingTextArea(key, selected) {
  return {
    type: CHANGE_BABYSITTING_TEXTAREA,
    key: key,
    selected: selected,
  };
}

export function changeHouseKeepingNumberHour(key, selected) {
  return {
    type: CHANGE_HOUSEKEEPING_NUMBER_HOUR,
    key: key,
    selected: selected,
  };
}

export function changeHouseKeepingFrequency(key, selected) {
  return {
    type: CHANGE_HOUSEKEEPING_FREQUENCY,
    key: key,
    selected: selected,
  };
}

export function changeHouseKeepingTextArea(key, selected) {
  return {
    type: CHANGE_HOUSEKEEPING_TEXTEAREA,
    key: key,
    selected: selected,
  };
}

export function changePersonnalAssistanceCheck(key, selected) {
  return {
    type: CHANGE_PERSONNAL_ASSISTANCE_CHECK,
    key: key,
    selected: selected,
  };
}

export function changePersonnalAssistanceUnCheck(key, selected) {
  return {
    type: CHANGE_PERSONNAL_ASSISTANCE_UN_CHECK,
    key: key,
    selected: selected,
  };
}

export function changePersonnalAssistanceNumberHour(key, selected) {
  return {
    type: CHANGE_PERSONNAL_ASSISTANCE_NUMBER_HOUR,
    key: key,
    selected: selected,
  };
}

export function changePersonnalAssistanceOrganization(key, selected) {
  return {
    type: CHANGE_PERSONNAL_ASSISTANCE_ORGANIZATION,
    key: key,
    selected: selected,
  };
}
