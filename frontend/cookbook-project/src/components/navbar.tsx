import { Link } from "react-router-dom";
import SearchBar from "./searchbar";

function Navbar() {
  return (
    <nav>
      <h2 id="site-title"><Link to="/">CookBook</Link></h2>
      <ul id="page-list">
        <li>
          <Link to="/explore">EXPLORE</Link>
        </li>
        <li>
          <Link to="/friends">FRIENDS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
      </ul>
      <SearchBar id="search-bar"/>
    </nav>
  );
}

export default Navbar;
