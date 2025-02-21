import zod from 'zod';

export const EmergencyContactSchema = zod.object({
  name: zod
    .string()
    .nonempty({ message: 'El nombre es obligatorio' })
    .max(75, { message: 'El nombre no puede superar los 75 caracteres' }),
  lastName: zod
    .string()
    .nonempty({ message: 'El apellido es obligatorio' })
    .max(75, { message: 'El apellido no puede superar los 75 caracteres' }),
  phone: zod
    .string()
    .nonempty({ message: 'El telefono es obligatorio' })
    .length(10, { message: 'El telefono debe tener 10 nu' })
    .regex(/^\d+$/, { message: 'El telefono solo puede contener números' }),
  email: zod
    .string()
    .nonempty({ message: 'El correo es obligatorio' })
    .email({ message: 'Correo electrónico inválido' }),
  country: zod.string().nonempty({ message: 'El pais es obligatorio' }),
  state: zod.string().nonempty({ message: 'El estado es obligatorio' }),
  municipality: zod.string().nonempty({ message: 'El municipio es obligatorio' }),
  colony: zod.string().nonempty({ message: 'La colonia es obligatorio' }),
  zipCode: zod.string().nonempty({ message: 'El codigo postal es obligatorio' }),
  numInside: zod.string().nonempty({ message: 'El numero interior es obligatorio' }),
  numOutside: zod.string().nonempty({ message: 'El numero exterior es obligatorio' }),
});

export type EmergencyContactType = zod.infer<typeof EmergencyContactSchema>;
