import "./Navbar.css";

function Navbar({ translateX }) {
    return (
        <div
            className="Navbar"
            style={{ translateX: translateX }}
        >
            Hello guys
        </div>
    );
}

export default Navbar;
