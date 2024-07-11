import './header.css';
import { Link } from "react-router-dom";
function Header() {

  return(
<div class="navbartext ">
  <div class="container">
  <Link class="text" aria-current="page" to="/">Welcome to the CRUD Application</Link>
  <p>Your one-stop shop for managing products!</p>
  
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
        </li>

  
      </ul>

    </div> */}
  </div>
</div>
  
)}


export default Header;
