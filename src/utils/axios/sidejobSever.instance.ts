import axios from "axios";

const sidejobServer = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		"Content-Type": "application/json",
	},
});

export default sidejobServer;
