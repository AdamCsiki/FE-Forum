import "./Register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/base";
import setAuth from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import RegisterModel from "../../models/RegisterModel";

function Register() {
	const navigate = useNavigate();

	const {
		response: registerResponse,
		error: error,
		loading: loading,
		fetchData: fetchData,
	} = useAxios();
	const emptyRegister: RegisterModel = {
		id: 0,
		role: "",
		karma: 0,
		description: "",
		username: "",
		date_of_creation: new Date(),
		email: "",
		password: "",
		confirm_password: "",
		pfp_url: "",
		header_url: "",
	};
	const [formData, setFormData] = useState<RegisterModel>(emptyRegister);

	const [valid, setValid] = useState(false);

	const [pass, setPass] = useState<string>("");
	const [verPass, setVerPass] = useState<string>("");
	const [passError, setPassError] = useState<string>("");

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormData((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (valid) {
			await fetchData("/users", "POST", formData);
			console.log("RESPONSE: ", registerResponse);
		}
	};

	// VALIDATION

	const handleVerifyPassword = (pass: string, verPass: string) => {
		if (pass.valueOf() !== verPass.valueOf() && verPass !== "") {
			setPassError("Password doesn't match!");
			setValid(false);
		} else {
			setFormData((values) => {
				return { ...values, password: pass };
			});
			setPassError("");
			setValid(true);
		}
	};

	useEffect(() => {
		handleVerifyPassword(pass, verPass);
	}, [pass, verPass]);

	return (
		<form
			className="Register"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<div className="register-input-container">
				<h5 className="nomargin medium">Username</h5>
				<Input
					placeholder={"Username"}
					name={"username"}
					type={"text"}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<h5 className="nomargin medium">Password</h5>
				<Input
					placeholder={"Password"}
					type={"password"}
					name={"password"}
					onChange={(e) => {
						setPass(e.target.value);
					}}
				/>
				<h5 className="nomargin medium">Confirm Password</h5>
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
				<span className="error-message nomargin bold">{passError}</span>
				<span className="error-message nomargin bold">{error}</span>
			</div>
		</form>
	);
}

export default Register;
