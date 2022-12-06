import axios from "../api/base.ts";
import { useEffect, useState } from "react";

function useAxios({ url, method, body = null, headers = null }) {
	const [response, setResponse] = useState({});
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchData = () => {
		axios({
			method: method,
			url: url,
			data: body,
			headers: headers,
		})
			.then((resp) => {
				setResponse(resp.data);
			})
			.catch((error) => {
				setErr(error);
			})
			.finally(setLoading(false));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { response, err, loading };
}

export default useAxios;
