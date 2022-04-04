import "../css/common.css";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="whole">
            <div className="head">
                <div className="logo">
                    <Link to="/home"><h1>logo</h1></Link>
                </div>
                <div className="menu">
                    <ul>
                        <Link to="/work">
                            <li>
                                Work
                            </li>
                        </Link>
                        <Link to="/about">
                            <li>
                                About
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Header;