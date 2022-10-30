import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { PersonCircle, List } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

function Header() {
    const [profileClicked, setProfileClicked] = useState(false);
    const [navbarClicked, setNavbarClicked] = useState(false);

    useEffect(() => {
        if (navbarClicked) {
        }
    }, [navbarClicked]);

    return (
        <>
            <div className="Header">
                <Link to={{ pathname: "/" }}>
                    <Logo />
                </Link>
                <div className="header-button-container">
                    <button className="header-button">
                        <PersonCircle
                            onClick={() => {
                                setProfileClicked(!profileClicked);
                                setNavbarClicked(false);
                            }}
                            className="header-profile-button"
                            size={30}
                        />
                    </button>
                    <button className="header-button">
                        <List
                            onClick={() => {
                                setNavbarClicked(!navbarClicked);
                                setProfileClicked(false);
                            }}
                            className="header-navbar-button"
                            size={40}
                        />
                    </button>
                </div>
            </div>
            <Navbar translateX={"0"} />
        </>
    );
}

export default Header;
