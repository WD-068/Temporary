import { useParams, Link } from "react-router";
import { useUser } from "../hooks/useUserData";

const UserProfile = () => {
  const { userId } = useParams();
  const user = useUser(userId);

  if (!user) return <div className="p-4">Loading user data...</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link
        to="/users"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        ← Back to Users
      </Link>

      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-medium">Website:</span> {user.website}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Company</h2>
            <p>
              <span className="font-medium">Name:</span> {user.company.name}
            </p>
            <p>
              <span className="font-medium">Business:</span> {user.company.bs}
            </p>
            <p>
              <span className="font-medium">Catchphrase:</span> "
              {user.company.catchPhrase}"
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
