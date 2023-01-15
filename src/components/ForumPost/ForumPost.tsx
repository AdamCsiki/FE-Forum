import "./ForumPost.css";
import { Link } from "react-router-dom";
import PostModel from "../../models/PostModel";

function ForumPost({ post, postId }: { postId: number; post: PostModel }) {
	return (
		<div className="Post">
			<div className="post-header">
				<Link
					to={{ pathname: `/post/${postId}` }}
					style={{ textDecoration: "none" }}
				>
					<h5 className="nomargin bold post-title">
						{post.title ?? "None"}
					</h5>
				</Link>

				<h6 className="nomargin bold">{post.karma}+</h6>
			</div>
			<div className="post-content">
				<Link
					to={{ pathname: "/author" }}
					style={{ textDecoration: "none", width: "fit-content" }}
				>
					<span className="nomargin medium post-author">
						Author: {post.userId ?? "No one"}
					</span>
				</Link>

				<small className="nomargin post-replies bold">Replies: 0</small>
			</div>
		</div>
	);
}

export default ForumPost;
