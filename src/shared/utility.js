export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = isValid && value.trim() !== '';
  }

  if (rules.minLength) {
    isValid = isValid && value.length >= rules.minLength;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.maxLength) {
    isValid = isValid && value.length <= rules.maxLength;
  }

  return isValid;
};
