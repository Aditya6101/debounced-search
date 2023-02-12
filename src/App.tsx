import { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import CountriesList from "./components/CountriesList";
import Loader from "./components/Loader";

const URL = `https://restcountries.com/v3.1/name`;

function App() {
  const [name, setName] = useState("");
  const [countriesList, setCountris] = useState<CountriesList>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function updateCountries() {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${URL}/${name}`);
      const data = await res.json();

      if (res.status === 404) {
        setCountris([]);
        setLoading(false);
        setError("No country with that name!");
      }

      setCountris(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setCountris([]);
      setLoading(false);
      setError("Oops... Something went wrong!");
    }
  }

  useEffect(() => {
    if (name === "") return;

    const getData = setTimeout(() => {
      updateCountries();
    }, 2000);

    return () => clearTimeout(getData);
  }, [name]);

  return (
    <main className="w-4/5 min-w-[768px] min-h-[500px] bg-neutral-100 rounded px-4">
      <Searchbar
        query={name}
        setQuery={setName}
        handleSubmit={updateCountries}
      />

      {loading && <Loader />}

      {error && (
        <p className="text-center font-semibold text-sm text-red-400">
          {error}
        </p>
      )}

      {countriesList.length > 0 && (
        <CountriesList countriesList={countriesList} />
      )}
    </main>
  );
}

export default App;
