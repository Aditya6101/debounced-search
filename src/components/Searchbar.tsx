import { FC, Dispatch, FormEvent } from "react";

type Props = {
  query: string;
  setQuery: Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
};

const Searchbar: FC<Props> = ({
  query,
  setQuery,
  handleSubmit: handleSearchSubmit,
}) => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSearchSubmit();
  }

  return (
    <form
      className="flex items-center justify-between gap-3"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter country name"
        className="my-4 font-normal p-2 border rounded flex-1 focus-within:outline-gray-400"
      />

      <button className="border py-2 px-3 font-medium bg-gray-800 rounded text-white">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
