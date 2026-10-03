import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FC, InputHTMLAttributes } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const SearchBar: FC<SearchProps> = ({ id }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const styles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const searchStyle = {
    cursor: "pointer",
  };

  async function handleSearch() {
    try {
      navigate("/search", { state: input });
    } catch (error) {
      console.error("ERROR:", error);
    }
  }

  return (
    <div id="search-bar-row" style={styles}>
      <img
        src="./icons/search-button.svg"
        alt="Search button"
        id="search-btn"
        style={searchStyle}
        onClick={handleSearch}
      ></img>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id={id}
      ></input>
    </div>
  );
};

export default SearchBar;
