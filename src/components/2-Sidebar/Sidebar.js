import { Link } from "react-router-dom";
import './sidebar.css';

function Sidebar() {
    return(
<>
<ul className="list-unstyled">
<li>
<Link class="nav-link" to="/Products">Products</Link>
</li>
<li>
<a href="#"> get all catogry </a>
</li>

</ul>

</>
 )
}
export default Sidebar;