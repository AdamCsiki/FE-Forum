import "./Login.css";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import gameLogo from "../../img/Ara.png";
import Button from "../../components/Button/Button";
import { useEffect, useState, useContext, lazy } from "react";
import AuthContext from "../../context/AuthProvider.js";
import axios from "../../api/base";
import loginForm from "../../models/loginForm";
import useAxios from "../../hookers/useAxios";

// imports that are not needed instantly
import CardsBg from "../../components/CardsBg/CardsBg";

function LoginPage() {
	const navigate = useNavigate();

	const { setAuth } = useContext(AuthContext);
	const [formData, setFormData] = useState(loginForm);

	const [loginResponse, error, loading, fetchData] = useAxios();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await fetchData("/users/login", "GET", formData);

		const accessToken = loginResponse?.data?.accessToken;

		setAuth({ loginResponse, accessToken });

		setFormData({});
	};

	return (
		<form
			className="LoginPage"
			onSubmit={(e) => {
				console.log(formData);
				handleSubmit(e);
			}}
		>
			<CardsBg />
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
					onClick={() => {
						navigate("/register");
					}}
				>
					Register
				</Button>
			</div>

			<div className="login-title-container">
				<h2>
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
					placeholder={"Username"}
					name={"username"}
					type={"username"}
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
				>
					<span>Sign In</span>
				</Button>
				<span className="error-message center nomargin bg-blur round pad">
					{error}
				</span>
			</div>
		</form>
	);
}

export default LoginPage;
