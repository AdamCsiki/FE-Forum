import "./Login.css";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import gameLogo from "../../img/Ara.png";
import Button from "../../components/Button/Button";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/AuthProvider.tsx";
import Canvas from "../../components/Canvas/Canvas";
import backgroundImage from "../../img/BlackStalin_short.jpg";
import axios from "axios";

function LoginPage() {
	const navigate = useNavigate();

	const { setAuth } = useContext(AuthContext);
	const [formData, setFormData] = useState({});

	const [error, setError] = useState("");

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"login_url",
				JSON.stringify(formData),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);

			const accessToken = response?.data?.accessToken;

			setAuth({ ...formData, accessToken });

			setFormData({});
		} catch (err) {
			if (!err?.response) {
				setError("No Server Response");
			} else if (err.response?.status === 400) {
				setError("Missing Email or Password");
			} else if (err.response?.status === 401) {
				setError("Unauthorized");
			} else {
				setError("Login Failed");
			}
		}
	};

	return (
		<form
			className="LoginPage"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<div className="login-background">
				<img
					className="login-background-image"
					src={backgroundImage}
				/>
			</div>

			<div className="login-header">
				<div className="logo-image-container">
					<img
						id="game-logo-image"
						src={gameLogo}
						alt="Game logo"
					/>
				</div>
				<Button
					id="login-register-button"
					style={{
						fontSize: "15px",
						width: "fit-content",
						margin: "15px",
					}}
					onClick={() => {
						navigate("/register");
					}}
				>
					Register
				</Button>
			</div>

			<div className="login-title-container">
				<h2 style={{ fontWeight: 700 }}>
					<span
						style={{
							color: "var(--main-color)",
							fontSize: "inherit",
						}}
					>
						Log
					</span>
					in
				</h2>
			</div>

			<div className="login-input-container">
				<Input
					placeholder={"Email"}
					name={"email"}
					type={"email"}
					onChange={handleChange}
				/>
				<Input
					placeholder={"Password"}
					type={"password"}
					name={"password"}
					onChange={handleChange}
				/>

				<Link
					to={{ pathname: "/forgot_form" }}
					id="login-forgot-password"
					className="noline"
				>
					<span className="center">Can't sign in?</span>
				</Link>
			</div>
			<div className="login-button-container">
				<Button
					id="login-button"
					type={"submit"}
					onClick={(e) => {
						handleSubmit(e);
					}}
				>
					<span>Sign In</span>
				</Button>
				<h5 className="error-message center nomargin">{error}</h5>
			</div>
		</form>
	);
}

export default LoginPage;
