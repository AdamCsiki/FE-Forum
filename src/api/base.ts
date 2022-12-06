import axios from "axios";

const API = "https://pornhub.com";
const TIMEOUT = 1000;
const HEADERS = {};

axios.create({
	baseURL: API,
	timeout: TIMEOUT,
	headers: HEADERS,
});

export default axios;
