import "./Register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/base";
import setAuth from "../../context/AuthProvider";

function Register() {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormData((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setError("");
			const response = await axios.post(
				"/users",
				JSON.stringify(formData),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);

			console.log(response.data);

			const accessToken = response?.data?.accessToken;

			setAuth({ ...formData, accessToken });

			setFormData({});
		} catch (err) {
			if (!err?.response) {
				setError("No Server Response");
			} else if (err.response?.status === 400) {
				setError("Missing something?");
			} else if (err.response?.status === 401) {
				setError("Unauthorized");
			} else {
				setError("Register Failed");
			}
		}
	};

	return (
		<form
			className="Register"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<div className="register-input-container">
				<h5 className="nomargin medium">Username</h5>
				<Input placeholder={"Username"} />
				<h5 className="nomargin medium">Age of birth</h5>
				<div className="register-input-age-container">
					<Input
						placeholder={"Day"}
						style={{ width: "30%" }}
						type={"number"}
						min={1}
						max={32}
					/>
					<Input
						placeholder={"Month"}
						style={{ width: "30%" }}
						type={"number"}
						min={1}
						max={12}
					/>
					<Input
						placeholder={"Year"}
						style={{ width: "30%" }}
						type={"number"}
						min={1900}
						max={2022}
						pattern={"\b([1-2][0-9][0-9][0-9])\b"}
					/>
				</div>
				<h5 className="nomargin medium">Password</h5>
				<Input placeholder={"Password"} />
				<h5 className="nomargin medium">Confirm Password</h5>
				<Input placeholder={"Confirm Password"} />
				<span className="error-message nomargin bold">{error}</span>
				<div className="register-button-container">
					<Button
						type={"button"}
						onClick={() => {
							navigate(-1);
						}}
					>
						<h6 className="nomargin bold">Cancel</h6>
					</Button>
					<Button
						type={"submit"}
						onClick={(e) => {
							handleSubmit(e);
						}}
					>
						<h6 className="nomargin bold">SignUp</h6>
					</Button>
				</div>
			</div>
		</form>
	);
}

export default Register;
