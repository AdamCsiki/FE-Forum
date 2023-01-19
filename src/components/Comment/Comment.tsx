import { useState, useEffect } from "react";
import User from "../../models/UserModel";
import Button from "../Button/Button";
import ProfileImage from "../ProfileImage/ProfileImage";
import "./Comment.css";
import CommentModel from "../../models/CommentModel";
import axios from "../../api/base";
import UserModel from "../../models/UserModel";
import InvisButton from "../InvisButton/InvisButton";
import TextArea from "../TextArea/TextArea";
import { useNavigate } from "react-router-dom";

function PostComment({
	comment,
	postId,
	user,
}: {
	comment: CommentModel;
	postId: number | null;
	user: UserModel | null;
}) {
	const navigate = useNavigate();
	const [author, setAuthor] = useState<UserModel | null>(null);
	const [children, setChildren] = useState<any>([]);

	const [replyEnabled, setReplyEnabled] = useState(false);

	const [formData, setFormData] = useState({ content: "" });

	const getAuthor = () => {
		axios({
			url: `/users/${comment.userId}`,
			method: "GET",
		})
			.then((response) => {
				setAuthor(response.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const getChildren = () => {
		if (!comment.id) {
			return;
		}
		axios({
			url: `/comments/comment/${comment.id}`,
			method: "GET",
		})
			.then((response) => {
				console.log("Get children: ", response.data);
				createChildrenComponents(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const createChildrenComponents = (comments: CommentModel[]) => {
		let i = 0;
		setChildren(
			comments.map((comment: any) => (
				<PostComment
					key={i++}
					user={user}
					comment={comment}
					postId={postId}
				/>
			))
		);
	};

	const onChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;

		console.log(name, value);
		setFormData({ ...formData, [name]: value });
	};

	const reply = () => {
		if (!formData.content || !user || !postId) {
			return;
		}
		const _comment: CommentModel = {
			id: 0,
			content: formData?.content,
			userId: user?.id,
			postId: postId,
			parentId: comment.id,
		};

		axios({
			url: "/comments",
			method: "POST",
			data: _comment,
		})
			.then((response) => {
				console.log(response);
			})
			.finally(() => {
				getChildren();
			});
	};

	useEffect(() => {
		getAuthor();
		getChildren();
	}, []);

	return (
		<div className="PostComment">
			<div className="postcomment-main">
				<div className="postcomment-header">
					<ProfileImage src={author?.pfp_url} />
					<a href="#a">{author?.username}</a>
				</div>
				<div className="postcomment-content">{comment.content}</div>
				<div className="postcomment-footer">
					<InvisButton
						id="postcomment-reply-button"
						onClick={() => {
							if (!user) {
								navigate("/user/login");
							}
							setReplyEnabled(!replyEnabled);
						}}
					>
						Reply
					</InvisButton>
					{replyEnabled && (
						<div className="userpost-reply-container">
							<TextArea
								onChange={(e: any) => {
									onChange(e);
								}}
								name="content"
							/>
							<div className="userpost-reply-footer">
								<Button
									onClick={() => {
										reply();
										setReplyEnabled(false);
									}}
								>
									Reply
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
			{children ? (
				<div className="postcomment-children">{children}</div>
			) : undefined}
		</div>
	);
}

export default PostComment;
