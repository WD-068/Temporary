import { useState } from "react";
import "./index.css";
import { sleep, validate } from "./utils/validation";

/**
 * Main App component that renders a contact form with validation and submission handling.
 * Features:
 * - Form state management
 * - Field validation
 * - Loading states
 * - Form submission with simulated API call
 */
const App = () => {
  // State for form data with initial empty values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Loading state to handle form submission state
  const [loading, setLoading] = useState(false);

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Handles input changes and updates the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handles form submission with validation and simulated API call
   * @param {React.FormEvent} e - The form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state to true to show loading UI
    setLoading(true);

    // Validate form data
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // Check if there are any validation errors
    const hasNoErrors = Object.keys(validationErrors).length === 0;

    if (!hasNoErrors) {
      setLoading(false);
      return;
    }

    if (hasNoErrors) {
      try {
        // Simulate API call with a 2-second delay
        await sleep(2000);

        // Log form data to console (in a real app, this would be an API call)
        console.log("Form submitted with data:", formData);

        // Reset form on successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        // Handle any errors during form submission
        console.error("Error submitting form:", error);
      }
    }

    // Reset loading state
    setLoading(false);
  };

  return (
    <div>
      <main className="min-h-screen bg-gray-100 p-8 font-sans">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
          <h2 className="tex t-2xl font-bold text-center text-gray-800">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                // disabled={loading}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                placeholder="Leia Organa"
              />

              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                // disabled={loading}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                placeholder="leia@rebellion.org"
              />

              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                // disabled={loading}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                placeholder="Tell us how we can help..."
              />

              {errors.message && (
                <p className="text-sm text-red-600 mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              // disabled={loading}
              className={`w-full py-2 rounded text-white ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending message..." : "Send Message"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
