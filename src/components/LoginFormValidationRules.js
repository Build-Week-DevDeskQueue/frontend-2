/* Form Validation */

// Validates username
export function validateUsername(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username is required!';
  }
  return errors;
}

// Validates password
export function validateEmail(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email address is required!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid!';
  }
  return errors;
}
