import { connect } from "react-redux";
import { Link, Router, Route } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to={"/Home"}> home </Link></li>
          <li><Link to={"/About"}> about </Link></li>
          <li><Link to={"/Contact"}> Contact </Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default connect()(Navbar);
