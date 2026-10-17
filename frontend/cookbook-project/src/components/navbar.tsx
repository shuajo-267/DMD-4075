import { Link } from "react-router-dom";
import SearchBar from "./searchbar";

function Navbar() {
  return (
    <div id="navWrapper">
      <nav>
        <h1 id="site-title"><Link to="/">CookBook</Link></h1>
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
        <Link to="/profile">
          <img src="icons/blank_pfp_2.svg" alt="blank profile picture" id="pfp"></img>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
