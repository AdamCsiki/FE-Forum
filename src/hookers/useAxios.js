import axios from "../api/base";
import { useState } from "react";

function useAxios() {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchData = (url, method, body = {}) => {
		axios({
			method: method,
			url: url,
			data: body,
		})
			.then((resp) => {
				setResponse(resp.data);
			})
			.catch((err) => {
				if (!err?.response) {
					setError("No Server Response");
				} else if (err.response?.status === 400) {
					setError("Missing Email or Password");
				} else if (err.response?.status === 401) {
					setError("Unauthorized");
				} else {
					setError("Login Failed");
				}
			})
			.finally(setLoading(false));
	};

	return [response, error, loading, fetchData];
}

export default useAxios;
