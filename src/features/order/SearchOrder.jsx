import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    if (!query) return;
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-3 py-2 text-xs transition-all duration-300 placeholder:text-stone-400 focus:bg-yellow-100 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:px-5 sm:text-sm sm:focus:w-72"
      ></input>
    </form>
  );
}

export default SearchOrder;
