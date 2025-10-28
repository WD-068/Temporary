import { useOutletContext } from "react-router";

const About = () => {
  const { signedIn } = useOutletContext();

  if (!signedIn) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Users</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-xl text-white font-semibold mb-4">
            Authentication Required
          </h2>
          <p className="text-gray-300 mb-4">
            Please sign in to view the list of users.
          </p>
          <p className="text-gray-400 text-sm">
            This is a demonstration of using useOutletContext for authentication
            checks.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  );
};

export default About;
