import "./index.css";

import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./components/ErrorFallback";
import Submit from "./components/Submit";

const App = () => {
  const submitAction = async (formData) => {
    throw new Error("This error was thrown from the action");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
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
            <Submit />
          </form>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default App;
