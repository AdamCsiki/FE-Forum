import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import InvisButton from "../InvisButton/InvisButton";
import { List } from "react-bootstrap-icons";

function Navbar({ active }: { active: boolean }) {
	const [left, setLeft] = useState<number | string>(0);

	useEffect(() => {
		if (active) {
			setLeft(0);
		} else {
			setLeft("-50%");
		}
	}, [active]);

	return (
		<div
			className="Navbar"
			style={{
				left: left,
			}}
		>
			<ul className="navbar-list">
				<li className="navbar-list-element">
					<InvisButton
						id={"navbar-toggle-button"}
						onClick={() => {
							active = false;
						}}
					>
						<List
							size={35}
							color={"var(--white)"}
						/>
					</InvisButton>
				</li>
				<li className="navbar-list-element">
					<Link
						to={{ pathname: "/" }}
						className="noline"
					>
						<h5 className="nomargin bold navbar-link">Home</h5>
					</Link>
				</li>
				<li className="navbar-list-element">
					<Link
						to={{ pathname: "/all" }}
						className="noline"
					>
						<h5 className="nomargin bold navbar-link">Forum</h5>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
