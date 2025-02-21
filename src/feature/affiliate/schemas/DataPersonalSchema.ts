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
  //dateOfBirth: zod.string().nonempty({ message: 'La fecha de nacimiento es obligatorio' }),
  curp: zod
    .string()
    .nonempty({ message: 'El CURP es obligatorio' })
    .length(18, { message: 'El CURP no puede superar los 18 caracteres' }),
  rfc: zod
    .string()
    .nonempty({ message: 'El RFC es obligatorio' })
    .length(13, { message: 'El RFC no puede superar los 13 caracteres' }),
  civilStatus: zod.string().nonempty({ message: 'El estado civil es obligatorio' }),
  occupation: zod.string().nonempty({ message: 'La ocupación es obligatorio' }),
  gender: zod.string().nonempty({ message: 'El genero es obligatorio' }),
  nationality: zod.string().nonempty({ message: 'La nacionalidad es obligatorio' }),
  typeAffiliate: zod.string().nonempty({ message: 'El tipo de afiliado es obligatorio' }),
  typeIndentify: zod.string().nonempty({ message: 'El tipo de identificacion es obligatorio' }),
});

export type DataPersonalType = zod.infer<typeof DataPersonalSchema>;
