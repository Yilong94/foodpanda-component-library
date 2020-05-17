export type ValidateFunction = (value: any) => boolean;

export const isRequired = (value: string) => {
  return !!value;
};

export const isPostalCode = (value: string) => {
  return /^\d{6}$/.test(value);
};

export const validateAll = (
  value: any,
  validateFunctions: ValidateFunction[]
) => {
  return validateFunctions.every(validateFunction => validateFunction(value));
};
