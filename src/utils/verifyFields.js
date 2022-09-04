export default function verifyFields(fieldsVerification) {
  const keys = Object.keys(fieldsVerification);
  const [firstError] = keys.filter((key) => fieldsVerification[key] !== true);
  return fieldsVerification[firstError];
}
