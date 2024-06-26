import axios from "axios";

const sidejobApi = axios.create({
	baseURL: "http://127.0.0.1:5000/api/v1",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

export default sidejobApi;
