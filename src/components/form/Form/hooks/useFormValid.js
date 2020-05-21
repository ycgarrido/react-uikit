const useFormValid = ({ onValid, validate = [] }) => {
  const validForm = [...validate];
  return ({ valid, name }) => {
    if (valid && validForm.includes(name))
      validForm.splice(validForm.indexOf(name), 1);
    else if (!valid && !validForm.includes(name)) validForm.push(name);
    if (validForm.length === 0) onValid({ valid: true });
    else if (validForm.length !== 0) onValid({ valid: false });
  };
};

export default useFormValid;
