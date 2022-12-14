import axios from "../../api/base";
import post from "../../models/post";

function Canvas() {
	const handleSubmit = () => {
		try {
			console.log(post);
			const res = axios.put("/posts");
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	handleSubmit();

	return <div></div>;
}

export default Canvas;
