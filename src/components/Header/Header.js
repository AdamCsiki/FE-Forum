import "./Header.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { PersonCircle, List } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ switchRef }) {
	const [title, setTitle] = useState("Home");
	const [user, setUser] = useState({ username: "Jane Doe" });

	useEffect(() => {
		setTitle(document.getElementsByTagName("title")[0].innerHTML);
	}, [document.getElementsByTagName("title")[0].innerHTML]);

	return (
		<div className="Header">
			<Link to={{ pathname: "/" }}>
				<Logo />
			</Link>
			<ToggleSwitch
				onClick={() => {
					switchRef.current = !switchRef.current;
				}}
			/>
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
		</div>
	);
}

export default Header;
