import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ translateX }) {
    return (
        <div
            className="Navbar"
            style={{ translateX: translateX }}
        >
            <ul className="navbar-list">
                <li className="navbar-list-element">
                    <Link
                        to={{ pathname: "/home" }}
                        className="noline"
                    >
                        <h6 className="nomargin bold navbar-link">Home</h6>
                    </Link>
                </li>
                <li className="navbar-list-element">
                    <Link
                        to={{ pathname: "/all" }}
                        className="noline"
                    >
                        <h6 className="nomargin bold navbar-link">Forum</h6>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
