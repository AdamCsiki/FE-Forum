import "./Header.css";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import User from "../../models/UserModel";

function Header({ user }: { user?: User }) {
	const navigate = useNavigate();
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<div className="Header">
			<Link
				to={{ pathname: "/" }}
				style={{ height: "75%", minWidth: "fit-content" }}
			>
				<Logo />
			</Link>
			<div className="header-navbar">
				<Link
					to={{ pathname: "" }}
					color={"var(--white)"}
				>
					Forum
				</Link>

				<DropDown
					id={"header-profile-container"}
					onClick={() => {
						navigate("/login");
					}}
					active={true}
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
								{loggedIn ? user?.username : "Login"}
							</h6>
							<PersonCircle
								className="white"
								size={40}
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
