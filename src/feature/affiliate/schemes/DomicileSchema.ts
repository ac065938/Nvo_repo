import zod from 'zod';

export const DomicileSchema = zod.object({
    country: zod.string().nonempty({ message: 'El país es obligatorio' }),
    state: zod.string().nonempty({ message: 'El estado es obligatorio' }),
    municipality: zod.string().nonempty({ message: 'El municipio es obligatorio' }),
    colony: zod.string().nonempty({ message: 'La colonia es obligatoria' }),
    zipCode: zod.string().nonempty({ message: 'El código postal es obligatorio' }),
    numInside: zod.string().nonempty({ message: 'El número interno es obligatorio' }),
    numOutside: zod.string().nonempty({ message: 'El número externo es obligatorio' }),
    address: zod.string().nonempty({ message: 'La dirección es obligatoria' }),
});

export type DomicileType = zod.infer<typeof DomicileSchema>;
