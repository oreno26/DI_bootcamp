import { Link } from "react-router-dom"

const Navbar = (props) =>{
    return(
        <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link to={"/Home"}> Home</Link></li>
        <li><Link to={"/Favorites"}>Favorites</Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default Navbar