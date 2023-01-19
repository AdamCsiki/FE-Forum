import "./Login.css";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import gameLogo from "../../img/Ara.png";
import Button from "../../components/Button/Button";
import { useState, useEffect, useReducer } from "react";
import { useAuth } from "../../context/AuthContext";
import LoginModel from "../../models/LoginModel";
import store from "../../context/store";
import httpstatus from "../../httpstatus/httpstatus";

// imports that are not needed instantly
import CardsBg from "../../components/CardsBg/CardsBg";
import axios from "../../api/base";
import UserModel from "../../models/UserModel";

function Login() {
	const navigate = useNavigate();

	const { login } = useAuth();
	const emptyForm: LoginModel = { email: "", password: "" };
	const [formData, setFormData] = useState<LoginModel>(emptyForm);
	const [user, setUser] = useState<UserModel | null>(null);
	const [error, setError] = useState<string>("");

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((values) => ({ ...values, [name]: value }));
	};

	const submit = () => {
		console.log(formData);
		if (!formData.email || !formData.password) {
			setError("User or password is missing.");
			return;
		}
		axios({
			method: "POST",
			url: "/login",
			data: { email: formData.email, password: formData.password },
		})
			.then((response) => {
				localStorage.setItem("user", JSON.stringify(response.data));
				store.setState({ user: response.data });
			})
			.catch((error: any) => {
				if (error.response.code === 500) {
					setError("Server error.");
					return;
				}
				setError("Something went wrong.");
			})
			.finally(() => {
				setUser(store.getState().user);
			});
	};

	useEffect(() => {
		document.title = "Login";
		if (store.getState().user != null) {
			navigate("/");
		}
	}, [user]);

	return (
		<form
			className="LoginPage"
			onSubmit={(e) => {
				e.preventDefault();
				submit();
			}}
		>
			<CardsBg />
			<div id="login-register">
				<a href="/user/register">Register</a>
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

				<span className="center">Can't sign in?</span>
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

export default Login;
