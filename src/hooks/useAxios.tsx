import axios from "../api/base";
import { useState } from "react";
import { Method } from "axios";

function useAxios() {
	const [response, setResponse] = useState<any | null>(null);
	const [error, setError] = useState<string | any | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchData = (
		url: string,
		method: Method,
		body: {} = {},
		headers: {} = {}
	) => {
		axios({
			method: method,
			url: url,
			data: body,
			headers: headers,
		})
			.then((resp) => {
				console.log("Request: ", {
					url: url,
					method: method,
					body: body,
					headers: headers,
				});
				console.log("Response: ", resp.data);
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
			.finally(() => {
				setLoading(false);
			});
	};

	return { response, error, loading, fetchData, axios };
}

export default useAxios;
