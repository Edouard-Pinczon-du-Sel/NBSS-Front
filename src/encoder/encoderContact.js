const encodeFormByType = (formType, data) => {
  switch (formType) {
    case 'administrativeDepartment':
      return {
        firstname: data.administrativeDepartment.firstname,
        lastname: data.administrativeDepartment.lastname,
        mail: data.administrativeDepartment.mail,
        adress: data.administrativeDepartment.adress,
        city: data.administrativeDepartment.city,
        content: data.administrativeDepartment.content,
        firstnameOfDeceased: data.administrativeDepartment.firstnameOfDeceased,
        lastnameOfDeceased: data.administrativeDepartment.lastnameOfDeceased,
        maidenNameOfDeceased: data.administrativeDepartment.maidenNameOfDeceased,
        adressDeceased: data.administrativeDepartment.adressDeceased,
        zipCodeOfDeceased: data.administrativeDepartment.zipCodeOfDeceased,
        cityOfDeceased: data.administrativeDepartment.cityOfDeceased,
        dateOfBirth: data.administrativeDepartment.dateOfBirth,
        placeOfBirth: data.administrativeDepartment.placeOfBirth,
        dateOfDeceased: data.administrativeDepartment.dateOfDeceased,
        placeOfDeceased: data.administrativeDepartment.placeOfDeceased,
        postalCode: data.administrativeDepartment.postalCode,
      };
    case 'housekeeping':
      return {
        content: data.housekeeping.content,
        frequency: data.housekeeping.frequency,
        numberHour: data.housekeeping.numberHour,
      };
    case 'babysittingService':
      return {
        content: data.babysittingService.content,
        days: data.babysittingService.days,
        intervention: data.babysittingService.intervention,
        numberChild: data.babysittingService.numberChild,
        numberHour: data.babysittingService.numberHour,
      };
    case 'personalAssistanceService':
      return {
        content: data.personalAssistanceService.content,
        organization: data.personalAssistanceService.organization,
        personalAssistance: data.personalAssistanceService.personalAssistance,
        intervention: data.personalAssistanceService.intervention,
        financialHelp: data.personalAssistanceService.financialHelp,
        numberHour: data.personalAssistanceService.numberHour,
      };

    default:
  }
};

export const encodeContact = (data, formType) => ({
  firstname: data.contact.firstname,
  lastname: data.contact.lastname,
  maidenName: data.contact.maidenName,
  mail: data.contact.mail,
  adress: data.contact.adress,
  zipCode: data.contact.zipCode,
  city: data.contact.city,
  phoneNumber: data.contact.phoneNumber,
  content: data.contact.content,
  preferency: data.contact.preferency,
  createdAt: data.contact.createdAt,
  [formType]: encodeFormByType(formType, data),
});

export default encodeContact;
