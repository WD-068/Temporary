/**
 * Validates form fields and returns an object containing any validation errors.
 * @param {Object} formData - The form data to validate
 * @param {string} formData.name - The name field value
 * @param {string} formData.email - The email field value
 * @param {string} formData.message - The message field value
 * @returns {Object} An object containing field names as keys and error messages as values
 */
export const validate = ({ name, email, message }) => {
  const errors = {};
  
  // Validate name field
  if (!name?.trim()) {
    errors.name = "Name is required.";
  }
  
  // Validate email field
  if (!email?.trim()) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    // Basic email format validation using regex
    errors.email = "Invalid email format.";
  }
  
  // Validate message field
  if (!message?.trim()) {
    errors.message = "Message is required.";
  }
  
  return errors;
};

/**
 * Creates a promise that resolves after a specified delay.
 * Useful for simulating API calls or adding loading states.
 * @param {number} ms - The delay in milliseconds
 * @returns {Promise} A promise that resolves after the specified delay
 */
export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
