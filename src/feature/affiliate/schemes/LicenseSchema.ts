import zod from 'zod';

export const licenseSchema = zod.object({
  mark: zod.string().nonempty({ message: 'La marca es obligatoria' }),
  typeLicense: zod.string().nonempty({ message: 'El tipo de licencia es obligatorio' }),
  numLicense: zod.string().nonempty({ message: 'El número de licencia es obligatorio' }),
});
