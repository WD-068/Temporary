import { useActionState, useEffect, useState } from "react";
import "./index.css";
import { sleep, validate } from "./utils/validation";

/**
 * Form submission handler that processes form data and returns either
 * validation errors or a success state.
 *
 * @param {Object} prevState - Previous state from the form
 * @param {FormData} formData - Form data from the submitted form
 * @returns {Object} Either validation errors or a success state
 */
const submitAction = async (prevState, formData) => {
  // Extract form data
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate form inputs
  const validationErrors = validate({ name, email, message });

  // Return validation errors if any exist
  if (Object.keys(validationErrors).length > 0) {
    return validationErrors;
  }

  // Simulate API call with 2-second delay
  await sleep(2000);

  // Log the submitted data (in a real app, this would be an API call)
  console.log("Submitted:", { name, email, message });
  alert("Form submitted successfully!");

  // Return success state to trigger form reset
  return { success: true };
};

/**
 * Form component using React's useActionState for form state management.
 * Features:
 * - Client-side form validation with error display
 * - Loading state during submission
 * - Form reset on successful submission
 * - Error handling with user feedback
 */
const App = () => {
  // useActionState manages form state, actions, and pending state
  const [state, formAction, isPending] = useActionState(submitAction, {});

  // Local form state for controlled inputs
  const [{ name, email, message }, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes for controlled form fields
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Reset form when submission is successful
  useEffect(() => {
    if (state?.success) {
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state]);

  return (
    <main className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Leia Organa"
            />
            {state?.name && (
              <p className="text-sm text-red-600 mt-1">{state.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="leia@rebellion.org"
            />
            {state?.email && (
              <p className="text-sm text-red-600 mt-1">{state.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Tell us how we can help..."
            />
            {state?.message && (
              <p className="text-sm text-red-600 mt-1">{state.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded text-white ${
              isPending
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;
