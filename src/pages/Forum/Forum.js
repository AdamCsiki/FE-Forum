import "./Forum.css";
import Post from "../../components/Post/Post";
import { useParams } from "react-router-dom";

function Forum() {
	let { searchquery } = useParams();
	let postList = [];

	for (let i = 0; i < 99; i++) {
		postList.push(<Post key={i} />);
	}

	return (
		<div className="Forum">
			<div className="Posts">{postList}</div>
		</div>
	);
}

export default Forum;
