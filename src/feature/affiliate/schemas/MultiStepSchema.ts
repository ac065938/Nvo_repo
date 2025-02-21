import zod from 'zod';
import { DomicileSchema, DomicileType } from './DomicileSchema';
import { DataPersonalSchema, DataPersonalType } from './DataPersonalSchema';
import { EmergencyContactSchema, EmergencyContactType } from './EmergencyContactSchema';

export const MultiStepSchema = DataPersonalSchema.merge(
  zod.object({
    domicile: DomicileSchema,
    emergencyContact:  EmergencyContactSchema,
  })
);

export type MultiStepType = DataPersonalType & {
  domicile: DomicileType;
  emergencyContact: EmergencyContactType;
};
