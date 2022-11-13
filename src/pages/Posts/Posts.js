import "./Posts.css";
import Post from "../../components/Post/Post";

function Posts() {
	document.title = "All Posts";
	let postList = [];

	for (let i = 0; i < 99; i++) {
		postList.push(<Post />);
	}

	return (
		<div className="Posts">
			<Post />
		</div>
	);
}

export default Posts;
