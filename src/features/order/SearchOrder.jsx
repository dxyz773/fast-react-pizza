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
      ></input>
    </form>
  );
}

export default SearchOrder;
