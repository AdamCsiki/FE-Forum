import "./Register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
	document.title = "Register";

	const [formData, setFormData] = useState({});
	const [step, setStep] = useState(0);
	const navigate = useNavigate();
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
				"register_url",
				JSON.stringify(formData),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
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
			</div>
			<div className="register-input-container">
				<h5 className="nomargin medium">Password</h5>
				<Input placeholder={"Password"} />
				<h5 className="nomargin medium">Confirm Password</h5>
				<Input placeholder={"Confirm Password"} />
			</div>
			<div className="register-button-container">
				<Button
					style={{ width: "40%" }}
					type={"button"}
					onClick={() => {
						setStep(0);
					}}
				>
					<h6 className="nomargin bold">Back</h6>
				</Button>
				<Button
					style={{ width: "40%" }}
					type={"button"}
					onClick={() => {
						navigate("/all");
					}}
				>
					<h6 className="nomargin bold">SignUp</h6>
				</Button>
			</div>
		</form>
	);
}

export default Register;
