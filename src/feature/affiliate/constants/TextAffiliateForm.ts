import { optional } from "zod";

const texts = {
  info: 'INFORMACION DEL AFILIADO',
  details: 'DETALLES',
  name: 'NOMBRE *',
  lastName: 'APELLIDO *',
  date: 'FECHA DE NACIMIENTO',
  curp: 'CURP *',
  rfc: 'RFC *',
  kinship:{
    title: 'Parentesco *',
    options: {
      father: 'PADRE',
      mother: 'MADRE',
      other: 'OTRO'
    }
  },
  civilStatus: {
    title: 'ESTADO CIVIL',
    options: {
      single: 'SOLTERO',
      married: 'CASADO',
      divorced: 'DIVORCIADO',
      widowed: 'VIUDO',
    },
  },
  ocupation: {
    title: 'OCUPACION',
    options: {
      student: 'ESTUDIANTE',
      employed: 'EMPLEADO',
      selfEmployed: 'AUTONOMO',
      retired: 'PENSIONADO',
    },
  },
  gender: {
    title: 'GENERO',
    options: {
      male: 'HOMBRE',
      female: 'MUJER',
      other: 'OTRO',
    },
  },
  nationality: {
    title: 'NACIONALIDAD',
    options: {
      mexican: 'MEXICANA',
      american: 'AMERICANA',
      other: 'OTRA1',
    },
  },
  typeAffiliation: {
    title: 'TIPO DE AFILIACION',
    options: {
      student: 'ESTUDIANTE',
      employed: 'EMPLEADO',
      selfEmployed: 'AUTONOMO',
      retired: 'PENSIONADO',
    },
  },
  typeIdentification: {
    title: 'TIPO DE IDENTIFICACION *',
    options: {
      cc: 'CREDENCIAL DE CIUDADANIA',
      ti: 'TARJETA DE IDENTIDAD',
      pasaporte: 'PASAPORTE',
      otro: 'OTRO',
    },
  },
  numberIdentification: 'NUMERO DE IDENTIFICACION *',
  email: 'CORREO (opcional)',
  phone: 'CELULAR',
  optionalBeneficiary: 'INFORMACION DE BENEFICIARIO (opcional)',
  optionalBeneficiaryDetails: 'DETALLES',
};

export default texts;
