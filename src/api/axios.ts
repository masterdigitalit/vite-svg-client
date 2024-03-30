import axios from "axios";

const baseURL = () => {
	if (import.meta.env.VITE_MODE === "development") {
		return `http://192.168.1.3:3000/`;
	}
	if (import.meta.env.VITE_MODE === "production") {
		return "https://svg-blog-server.onrender.com/";
	}
};

export default axios.create({
	baseURL: baseURL(), //https://mains-h5w5.onrender.com/server/api  https://svg-blog-server.onrender.com/    http://192.168.1.3:9999/    https://svg-blog-server.onrender.com
	withCredentials: true,
});
