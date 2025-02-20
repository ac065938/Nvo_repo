import { useForm } from 'react-hook-form';
import { DataPersonalSchema, DataPersonalType } from './DataPersonalSchema.ts';
import { DomicileSchema, DomicileType } from './DomicileSchema.ts';
import { ContactEmergencySchema, ContactEmergencyType } from './ContactEmergencySchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';

const multiStepSchema = DataPersonalSchema.merge(DomicileSchema).merge(ContactEmergencySchema);
const defaultValues: DataPersonalType & DomicileType & ContactEmergencyType = {
  name: '',
  lastName: '',
  dateOfBirth: '',
  curp: '',
  rfc: '',
  numIdentification: '',
  country: '',
  state: '',
  municipality: '',
  colony: '',
  zipCode: '',
  numInside: '',
  numOutside: '',
  address: '',
  contactEmergencyName: '',
  contactEmergencyLastName: '',
  contactEmergencyCountry: '',
  contactEmergencyState: '',
  contactEmergencyMunicipality: '',
  contactEmergencyColony: '',
  contactEmergencyZipCode: '',
  contactEmergencyNumInside: '',
  contactEmergencyNumOutside: '',
  contactEmergencyAddress: '',
};
export default function MultiStepAffiliateSchema() {
  return useForm<DataPersonalType & DomicileType & ContactEmergencyType>({
    resolver: zodResolver(multiStepSchema),
    defaultValues,
  });
}
