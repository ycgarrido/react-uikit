export default ({ value, required, minLength, maxLength }) => {
  if (required && (!value || !value.trim())) return false;
  if (minLength && value && value.length < minLength) return false;
  if (maxLength && value && value.length > maxLength) return false;
  return true;
};
