import zod from 'zod';

export const ContactEmergencySchema = zod.object({
    contactEmergencyName: zod.string().nonempty({ message: 'El nombre es obligatorio' }),
    contactEmergencyLastName: zod.string().nonempty({ message: 'El apellido es obligatorio' }),
    contactEmergencyCountry: zod.string().nonempty({ message: 'El país es obligatorio' }),
    contactEmergencyState: zod.string().nonempty({ message: 'El estado es obligatorio' }),
    contactEmergencyMunicipality: zod.string().nonempty({ message: 'El municipio es obligatorio' }),
    contactEmergencyColony: zod.string().nonempty({ message: 'La colonia es obligatoria' }),
    contactEmergencyZipCode: zod.string().nonempty({ message: 'El código postal es obligatorio' }),
    contactEmergencyNumInside: zod.string().nonempty({ message: 'El número interno es obligatorio' }),
    contactEmergencyNumOutside: zod.string().nonempty({ message: 'El número externo es obligatorio' }),
    contactEmergencyAddress: zod.string().nonempty({ message: 'La dirección es obligatoria' }),
});

export type ContactEmergencyType = zod.infer<typeof ContactEmergencySchema>;
