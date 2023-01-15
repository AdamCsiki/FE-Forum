import "./Header.css";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import { useAuth } from "../../context/AuthContext";
import UserModel from "../../models/UserModel";

function Header() {
	const { user, getUser, logout } = useAuth();

	const navigate = useNavigate();

	useEffect(() => {
		getUser();
	}, []);

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
								{user?.username ?? "Not Logged In"}
							</h6>
							<PersonCircle
								className="white"
								size={40}
							/>
						</div>
					}
					list={
						user ? (
							<>
								<Link
									className="white"
									to={{ pathname: "/user/profile" }}
								>
									Profile
								</Link>
								<Link
									className="white"
									to={{ pathname: "/user/login" }}
									onClick={() => {
										logout();
									}}
								>
									Logout
								</Link>
							</>
						) : (
							<>
								<Link
									className="white"
									to={{ pathname: "/user/login" }}
									reloadDocument
								>
									Login
								</Link>
								<Link
									className="white"
									to={{ pathname: "/user/register" }}
									reloadDocument
								>
									Register
								</Link>
							</>
						)
					}
				/>
			</div>
		</div>
	);
}

export default Header;
