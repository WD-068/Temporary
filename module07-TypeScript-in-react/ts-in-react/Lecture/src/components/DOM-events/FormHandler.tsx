import { type FormEventHandler, useState } from "react";

const FormHandler = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    if (!email) {
      setError("Email is required");
      return;
    }
    console.log("Form submitted:", email);
  };

  if (error) {
    return (
      <>
        <div>{error}</div>
        <button onClick={() => setError(null)}>Try again</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandler;

// _____________________________________________________________________
// _____________________________________________________________________

// If you want to use actions, you need to make sure your action takes FormData:

// // // Assuming react-error-boundary is installed!
// import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

// const FallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
//   return (
//     <>
//       <div>{error instanceof Error ? error.message : 'Ooops! Something went wrong'}</div>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </>
//   );
// };

// const FormHandler = () => {
//   const action = (formData: FormData) => {
//     const email = formData.get('email');
//     if (!email) throw new Error('Email is required');
//     console.log('Form submitted');
//   };

//   return (
//     <ErrorBoundary FallbackComponent={FallBack}>
//       <form action={action}>
//         <input name='email' type='email' />
//         <button type='submit'>Submit</button>
//       </form>
//     </ErrorBoundary>
//   );
// };

// export default FormHandler;
