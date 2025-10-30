import "./index.css";
import { sleep, validate } from "./utils/validate";

/**
 * Form component using React's form action pattern.
 */
const App = () => {
  /**
   * Form action handler that processes form data on submission
   * @param {FormData} formData - The form data from the submitted form
   */
  const submitAction = async (formData) => {
    // Extract form values using FormData API
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate form inputs
    const validationErrors = validate({ name, email, message });

    // Proceed only if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      // Simulate API call with 2-second delay
      await sleep(2000);

      // Log the submitted data (in a real app, this would be an API call)
      console.log("Submitted:", { name, email, message });
      alert("Form submitted successfully!");
    } else {
      // Log validation errors to console
      console.error("Validation errors:", validationErrors);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <form action={submitAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Leia Organa"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="leia@rebellion.org"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Tell us how we can help..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;
