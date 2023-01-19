import "./Register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/base";
import setAuth from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import RegisterModel from "../../models/RegisterModel";
import { defaultRegister } from "../../models/defaults";
import store from "../../context/store";

function Register() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const { axios } = useAxios();
	const [formData, setFormData] = useState<RegisterModel>(defaultRegister);

	const [valid, setValid] = useState(false);

	const [pass, setPass] = useState<string>("");
	const [verPass, setVerPass] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		console.log(formData);
		if (valid) {
			axios({ url: "/register", method: "POST", data: formData })
				.then((response) => {
					console.log(response);
				})
				.catch((err) => {
					setError(err.message);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	};

	// VALIDATION

	const handleVerifyPassword = (pass: string, verPass: string) => {
		if (pass.valueOf() !== verPass.valueOf() && verPass !== "") {
			setError("Password doesn't match!");
			setValid(false);
		} else {
			setError("");
			setValid(true);
		}
	};

	useEffect(() => {
		handleVerifyPassword(pass, verPass);
	}, [pass, verPass]);

	useEffect(() => {
		document.title = "Register";
		if (store.getState().user != null) {
			navigate("/");
		}
	}, []);

	return (
		<form
			className="Register"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<div className="register-input-container">
				<Input
					placeholder={"Username"}
					name={"username"}
					type={"text"}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<Input
					placeholder={"Email"}
					type={"text"}
					name={"email"}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<Input
					placeholder={"Password"}
					type={"password"}
					name={"password"}
					onChange={(e) => {
						setPass(e.target.value);
						handleChange(e);
					}}
				/>
				<Input
					placeholder={"Confirm Password"}
					type={"password"}
					name={"confirmpass"}
					onChange={(e) => {
						setVerPass(e.target.value);
					}}
				/>

				<div className="register-button-container">
					<Button type={"submit"}>
						<h6 className="nomargin bold">SignUp</h6>
					</Button>
				</div>
				{error && (
					<span className="error-message nomargin bold">{error}</span>
				)}
			</div>
		</form>
	);
}

export default Register;
