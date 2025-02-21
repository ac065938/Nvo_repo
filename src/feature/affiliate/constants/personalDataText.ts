export const personalData = {
  texts: {
    title: 'Informacion del afiliado principal (Obligatorio)',
    description:
      'Asegurate de completar todos los datos, ya que son obligatorios para el registro del afiliado.',
    field: {
      firstName: 'Nombre',
      lastName: 'Apellidos',
      dateOfBirth: 'Fecha de nacimiento',
      curp: 'CURP',
      rfc: 'RFC',
      civilStatus: 'Estado civil',
      occupation: 'Ocupación',
      gender: 'Genero',
      nationality: 'Nacionalidad',
      typeAffiliate: 'Tipo de afiliado',
      emergencyContactName: 'Nombre',
      emergencyContactLastName: 'Apellidos',
      emergencyContactPhone: 'Telefono',
      emergencyContactRelationship: 'Parentesco',
      emergencyContactEmail: 'Correo electronico',
    },
  },
  options: {
    civilStatus: {
      single: { value: 'single', label: 'Soltero' },
      married: { value: 'married', label: 'Casado' },
      divorced: { value: 'divorced', label: 'Divorciado' },
      widow: { value: 'widow', label: 'Viudo' },
      separated: { value: 'separated', label: 'Separado' },
      unknown: { value: 'unknown', label: 'Desconocido' },
    },

    occupation: {
      employee: { value: 'employee', label: 'Empleado' },
      selfEmployed: { value: 'selfEmployed', label: 'Self-employed' },
      student: { value: 'student', label: 'Estudiante' },
      unemployed: { value: 'unemployed', label: 'Desempleado' },
      other: { value: 'other', label: 'Otro' },
    },

    nationality: {
      mexican: { value: 'mexican', label: 'Mexicano' },
      foreigner: { value: 'foreigner', label: 'Extranjero' },
    },

    gender: {
      male: { value: 'male', label: 'Masculino' },
      female: { value: 'female', label: 'Femenino' },
      other: { value: 'other', label: 'Otro' },
    },

    typeAffiliate: {
      principal: { value: 'principal', label: 'Principal' },
      dependent: { value: 'dependent', label: 'Dependiente' },
    },
  },
};
