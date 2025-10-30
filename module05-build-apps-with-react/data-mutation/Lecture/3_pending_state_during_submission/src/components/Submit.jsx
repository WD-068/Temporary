import { useFormStatus } from "react-dom";

/**
 * Submit button component that shows a loading state during form submission.
 * Uses the `useFormStatus` hook to track the form's submission state.
 *
 * Features:
 * - Displays a loading state while the form is being submitted
 * - Disables the button during submission to prevent multiple submissions
 * - Updates button styling based on the submission state
 */
const Submit = () => {
  // Hook that provides the pending state of the parent form
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`w-full py-2 rounded text-white ${
        pending
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default Submit;
