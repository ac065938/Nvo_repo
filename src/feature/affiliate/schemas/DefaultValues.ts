import { MultiStepType } from '../schemas/MultiStepSchema.ts';

export const defaultValues: MultiStepType = {
  name: '',
  lastName: '',
  curp: '',
  rfc: '',
  domicile: {
    country: '',
    state: '',
    municipality: '',
    colony: '',
    zipCode: '',
    numInside: '',
    numOutside: '',
    address: '',
  },
  emergencyContact: {
    name: '',
    lastName: '',
    phone: '',
    email: '',
    country: '',
    state: '',
    municipality: '',
    colony: '',
    zipCode: '',
    numInside: '',
    numOutside: '',
  },
};
