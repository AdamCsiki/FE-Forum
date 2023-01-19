import "./ForumPost.css";
import { Link } from "react-router-dom";
import PostModel from "../../models/PostModel";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import UserModel from "../../models/UserModel";

function ForumPost({ post, postId }: { postId: number; post: PostModel }) {
	const { axios } = useAxios();
	const [author, setAuthor] = useState<UserModel | null>(null);

	useEffect(() => {
		axios({ url: `/users/${post.userId}`, method: "GET" })
			.then((response) => {
				setAuthor(response.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<div className="Post">
			<div className="post-header">
				<Link
					to={{ pathname: `/post/${postId}` }}
					style={{ textDecoration: "none" }}
					target="_blank"
				>
					<h5 className="nomargin bold post-title">
						{post.title ?? "None"}
					</h5>
				</Link>

				<h6 className="nomargin bold">
					{post.karma > 0 ? "+" : null}
					{post.karma ?? 0}
				</h6>
			</div>
			<div className="post-content">
				<Link
					to={{ pathname: `/user/${post.userId}` }}
					style={{ textDecoration: "none", width: "fit-content" }}
					target="_blank"
				>
					<small className="nomargin medium post-author">
						Made by {author?.username ?? "No one"}
					</small>
				</Link>
			</div>
		</div>
	);
}

export default ForumPost;
