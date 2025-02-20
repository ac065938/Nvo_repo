import zod from 'zod';

export const DataPersonalSchema = zod.object({
  name: zod
    .string()
    .nonempty({ message: 'El nombre es obligatorio' })
    .max(75, { message: 'El nombre no puede superar los 75 caracteres' }),
  lastName: zod
    .string()
    .nonempty({ message: 'El apellido es obligatorio' })
    .max(75, { message: 'El apellido no puede superar los 75 caracteres' }),
  dateOfBirth: zod.string().nonempty({ message: 'La fecha es obligatoria' }),
  curp: zod
    .string()
    .nonempty({ message: 'El CURP es obligatorio' })
    .length(18, { message: 'El CURP debe tener 18 caracteres' }),
  rfc: zod
    .string()
    .nonempty({ message: 'El RFC es obligatorio' })
    .length(13, { message: 'El RFC debe tener 13 caracteres' }),
  numIdentification: zod
    .string()
    .nonempty({ message: 'El numero de identificacion es obligatorio' })
    .max(75, { message: 'El numero de identificacion no puede superar los 75 caracteres' }),
});

export type DataPersonalType = zod.infer<typeof DataPersonalSchema>;
