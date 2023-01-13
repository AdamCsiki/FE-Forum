import "./Login.css";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import gameLogo from "../../img/Ara.png";
import Button from "../../components/Button/Button";
import { useEffect, useState, useContext, lazy } from "react";
import AuthContext, { useAuth } from "../../context/AuthContext";
import axios from "../../api/base";
import LoginModel from "../../models/LoginModel";
import useAxios from "../../hooks/useAxios";

// imports that are not needed instantly
import CardsBg from "../../components/CardsBg/CardsBg";

function LoginPage() {
	const navigate = useNavigate();

	const { login, error } = useAuth();
	const emptyForm: LoginModel = { email: "", password: "" };
	const [formData, setFormData] = useState<LoginModel>(emptyForm);

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((values) => ({ ...values, [name]: value }));
	};

	return (
		<form
			className="LoginPage"
			onSubmit={(e) => {
				e.preventDefault();
				console.log(formData);
				login(formData.email, formData.password);
			}}
		>
			<CardsBg />
			<div id="login-register">
				<a href="/register">Register</a>
			</div>
			<div className="login-header">
				<div className="logo-image-container">
					<img
						id="game-logo-image"
						src={gameLogo}
						alt="Game logo"
					/>
				</div>
			</div>

			<div className="login-title-container">
				<h2 className="nomargin">Login</h2>
			</div>

			<div className="login-input-container">
				<Input
					placeholder={"Email"}
					name={"email"}
					type={"email"}
					onChange={(e) => handleChange(e)}
				/>
				<Input
					placeholder={"Password"}
					type={"password"}
					name={"password"}
					onChange={(e) => {
						handleChange(e);
					}}
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
					Sign In
				</Button>
				{error && (
					<span className="error-message center nomargin bg-blur round pad">
						{error}
					</span>
				)}
			</div>
		</form>
	);
}

export default LoginPage;
