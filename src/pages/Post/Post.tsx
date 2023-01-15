import "./Post.css";
import Comment from "../../components/Comment/Comment";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import Button from "../../components/Button/Button";
import InvisButton from "../../components/InvisButton/InvisButton";
import TextArea from "../../components/TextArea/TextArea";
import useAxios from "../../hooks/useAxios";
import UserModel from "../../models/UserModel";
import PostModel from "../../models/PostModel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserPost() {
	const params = useParams();
	const [post, setPost] = useState<PostModel | null>(null);

	const { response, error, loading, fetchData } = useAxios();

	useEffect(() => {
		fetchData(`/posts/${params.postid}`, "GET");
	}, []);

	useEffect(() => {
		if (response) {
			setPost(response);
		}
	}, [response]);

	if (!post) {
		return <div></div>;
	}

	return (
		<div className="UserPost">
			<div className="userpost-main">
				<div className="userpost-main-content">
					<div className="userpost-main-header">
						<ProfileImage />
						{post.userId ?? "No user"}
					</div>
					<h4 className="userpost-title-text nomargin">
						{post.title ?? "No title"}
					</h4>
					<div className="userpost-main-text">
						{post.content ?? "Content"}
					</div>
					<div className="userpost-reply-container">
						<InvisButton>
							<h6 className="nomargin pad">Reply</h6>
						</InvisButton>

						<TextArea />
						<div className="userpost-reply-footer"></div>
					</div>

					<div className="userpost-comment-container"></div>
				</div>
			</div>
		</div>
	);
}

export default UserPost;
