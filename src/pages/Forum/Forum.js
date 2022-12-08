import "./Forum.css";
import Post from "../../components/Post/Post";

function Forum() {
	document.title = "All Posts";
	let postList = [];

	for (let i = 0; i < 99; i++) {
		postList.push(<Post />);
	}

	return (
		<div className="Forum">
			<div className="Posts">
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}

export default Forum;
