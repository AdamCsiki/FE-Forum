import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile() {
	const { getUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		getUser();
		if (getUser() == null) {
			navigate("/user/login");
		}
	}, []);

	return (
		<div className="Profile">
			<div></div>
		</div>
	);
}

export default Profile;
