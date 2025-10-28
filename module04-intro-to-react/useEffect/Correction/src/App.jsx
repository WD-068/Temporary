import "./index.css";
import { useEffect, useState } from "react";

const App = () => {
  const [people, setPeople] = useState([]);
  const [url, setUrl] = useState("https://swapi.tech/api/people");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchPeople = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url);

        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();

        console.log(data);

        if (!ignore) {
          setPeople(data.results);
          setNextUrl(data.next);
          setPrevUrl(data.previous);
        }
      } catch (error) {
        if (!ignore) {
          setError("Could not load Star Wars characters.");
          console.error(err);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchPeople();

    return () => {
      ignore = true;
    };
  }, [url]);

  return (
    <main className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Star Wars Characters
        </h1>

        <div className="flex justify-center gap-4 pt-6">
          <button
            onClick={() => setUrl(prevUrl)}
            disabled={!prevUrl}
            className={`px-4 py-2 rounded ${
              prevUrl
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => setUrl(nextUrl)}
            disabled={!nextUrl}
            className={`px-4 py-2 rounded ${
              nextUrl
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-600 font-medium">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        {!loading && !error && (
          <ul className="grid sm:grid-cols-2 gap-4">
            {people.map((person) => (
              <li
                key={person.uid}
                className="bg-white p-4 rounded shadow text-center capitalize"
              >
                <span className="font-semibold text-gray-800">
                  {person.name}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default App;
