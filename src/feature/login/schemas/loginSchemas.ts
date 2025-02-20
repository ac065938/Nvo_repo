import zod from 'zod';

export const loginSchema = zod.object({
  email: zod
    .string()
    .nonempty({ message: 'El correo es obligatorio' })
    .email({ message: 'Correo electrónico inválido' })
    .max(313, { message: 'El correo no puede superar los 313 caracteres' }),
  password: zod
    .string()
    .nonempty({ message: 'La contraseña es obligatorio' })
    .max(16, { message: 'La contraseña no puede superar los 16 caracteres' }),
});
