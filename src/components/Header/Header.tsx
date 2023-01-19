import "./Header.css";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import { useAuth } from "../../context/AuthContext";
import UserModel from "../../models/UserModel";
import store from "../../context/store";

function Header() {
	const { logout } = useAuth();
	const user: UserModel | null = store.getState().user;

	const navigate = useNavigate();

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
							{user?.pfp_url ? (
								<img
									className="header-profile-picture"
									src={user.pfp_url}
									alt="Poza userului"
								/>
							) : (
								<PersonCircle
									className="white"
									size={40}
								/>
							)}
						</div>
					}
					list={
						user ? (
							<>
								<Link
									className="white"
									to={{
										pathname: `/user/${
											store.getState().user?.id
										}`,
									}}
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
