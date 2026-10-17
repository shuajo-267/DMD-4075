import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footerWrapper">
      <footer>
        <div id="footerContent">
          <h1 id="footer-title"><Link to="/">CookBook</Link></h1>
          <ul id="footerUl">
              <li>EXPLORE</li>
              <li>FRIENDS</li>
              <li>ABOUT US</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
