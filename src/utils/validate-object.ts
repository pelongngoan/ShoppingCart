export default function validateObject(
  requiredFields: string[] = [],
  object: { [key: string]: unknown }
) {
  const errors: string[] = [];
  requiredFields.forEach((field) => {
    if (!object[field]) {
      errors.push(`${field} is required`);
    }
  });
  return errors.length > 0
    ? { isValid: false, errors }
    : { isValid: true, errors };
}
