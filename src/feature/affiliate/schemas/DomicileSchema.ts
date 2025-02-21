import zod from 'zod';

export const DomicileSchema = zod.object({
  country: zod.string().nonempty({ message: 'El pais es obligatorio' }),
  state: zod.string().nonempty({ message: 'El estado es obligatorio' }),
  municipality: zod.string().nonempty({ message: 'El municipio es obligatorio' }),
  colony: zod.string().nonempty({ message: 'La colonia es obligatorio' }),
  zipCode: zod.string().nonempty({ message: 'El codigo postal es obligatorio' }),
  numInside: zod.string().nonempty({ message: 'El numero interior es obligatorio' }),
  numOutside: zod.string().nonempty({ message: 'El numero exterior es obligatorio' }),
  address: zod.string().nonempty({ message: 'La direccion es obligatorio' }),
});

export type DomicileType = zod.infer<typeof DomicileSchema>;
