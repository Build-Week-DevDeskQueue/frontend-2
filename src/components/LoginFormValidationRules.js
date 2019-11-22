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
export function validatePassword(values) {
  const errors = {};
  if (!values.password) {
    errors.password = 'Password is required!';
  }
  return errors;
}