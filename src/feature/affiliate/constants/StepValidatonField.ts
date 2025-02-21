export const stepValidationField: Record<number, string[]> = {
  0: [
    'name',
    'lastName',
    'curp',
    'rfc',
    'domicile.country',
    'domicile.state',
    'domicile.municipality',
    'domicile.colony',
    'domicile.zipCode',
    'domicile.numInside',
    'domicile.numOutside',
    'domicile.address',
  ],
  1: [
    'emergencyContact.name',
    'emergencyContact.lastName',
    'emergencyContact.phone',
    'emergencyContact.email',
    'emergencyContact.country',
    'emergencyContact.state',
    'emergencyContact.municipality',
    'emergencyContact.colony',
    'emergencyContact.zipCode',
    'emergencyContact.numInside',
    'emergencyContact.numOutside',
  ]
};
