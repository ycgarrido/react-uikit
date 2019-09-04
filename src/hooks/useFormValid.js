const useFormValid = ({ onValid }) => {
  const validForm = {};
  console.log("entra");
  return [
    ({ valid, name }) => {
      if (validForm[name] !== valid) {
        console.log(valid, name);
        if (valid) delete validForm[name];
        else validForm[name] = valid;
        if (Object.keys(validForm).length === 0) onValid({ valid: true });
        else if (Object.keys(validForm).length !== 0) onValid({ valid: false });
      }
    }
  ];
};

export default useFormValid;
