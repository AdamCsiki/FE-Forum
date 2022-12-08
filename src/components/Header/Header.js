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

<<<<<<< Updated upstream
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
=======
	return (
		<div className="Header">
			<Link to={{ pathname: "/" }}>
				<Logo />
			</Link>

			<div className="header-navbar">
				<Link
					to={{ pathname: "home" }}
					color={"var(--white)"}
				>
					Home
				</Link>
				<Link
					to={{ pathname: "all" }}
					color={"var(--white)"}
				>
					Forum
				</Link>
			</div>
			<DropDown
				id={"header-profile-container"}
				element={
					<div
						style={{
							width: "fit-content",
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							gap: ".5rem",
						}}
					>
						<h6 className="nomargin white nowrap">
							{user.username}
						</h6>
						<PersonCircle
							className="white"
							size={40}
							onResize={() => null}
						/>
					</div>
				}
				list={
					<>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-start",
								alignItems: "center",
							}}
						>
							<ToggleSwitch
								id="header-switch"
								onClick={() => {
									switchRef.current = !switchRef.current;
									console.log(switchRef);
								}}
							/>
						</div>
						<Link
							className="white"
							to={{ pathname: "/login" }}
						>
							Login
						</Link>
						<Link
							className="white"
							to={{ pathname: "/register" }}
						>
							Register
						</Link>
					</>
				}
			/>
		</div>
	);
>>>>>>> Stashed changes
}

export default Header;
