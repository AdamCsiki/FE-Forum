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
import store from "../../context/store";
import CommentModel from "../../models/CommentModel";
import { defaultComment } from "../../models/defaults";

function UserPost() {
	const params = useParams();

	const user = store.getState().user;
	const [author, setAuthor] = useState<UserModel | null>(null);
	const [post, setPost] = useState<PostModel | null>(null);
	const [comments, setComments] = useState<any>([]);

	const [formData, setFormData] = useState({ content: "" });

	const { axios } = useAxios();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const getPost = () => {
		setLoading(true);
		axios({ url: `/posts/${params.id}`, method: "GET" })
			.then((response) => {
				setPost(response.data);
				document.title = response.data.title;
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const getAuthor = () => {
		setLoading(true);
		axios({
			url: `/users/${post?.userId}`,
			method: "GET",
		})
			.then((response) => {
				setAuthor(response.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const getComments = () => {
		setLoading(true);

		axios({
			url: `/comments/post/${post?.id}`,
			method: "GET",
		})
			.then((response) => {
				createComments(response.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const createComments = (comments: CommentModel[]) => {
		let i = 0;

		let parentComments = comments.filter(
			(comment) => comment.parentId == null
		);

		console.log(parentComments);

		setComments(
			parentComments.map((comment: CommentModel) => (
				<Comment
					key={i++}
					comment={comment}
					user={user}
					postId={post?.id!}
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
		if (!formData.content || !user || !post) {
			return;
		}
		const comment: CommentModel = {
			id: 0,
			content: formData?.content,
			userId: user?.id,
			postId: post?.id,
			parentId: null,
		};

		axios({
			url: "/comments",
			method: "POST",
			data: comment,
		})
			.then((response) => {
				console.log(response);
			})
			.finally(() => {
				getComments();
			});
	};

	const modifyKarma = (value: number) => {
		axios({
			url: "/posts",
			method: "PUT",
			data: { ...post, karma: post?.karma! + value },
		})
			.then((response) => {
				console.log("Response: ", response.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		getPost();
	}, []);

	useEffect(() => {
		if (post) {
			getAuthor();
			getComments();
		}
	}, [post]);

	if (!post) {
		return <div></div>;
	}

	return (
		<div className="UserPost">
			<div className="userpost-main">
				<div className="userpost-main-content">
					<div className="userpost-main-header">
						<div className="userpost-main-header-author">
							<ProfileImage src={author?.pfp_url} />
							{author?.username ?? "No user"}
						</div>
					</div>
					<h4 className="userpost-title-text nomargin">
						{post.title ?? "No title"}
					</h4>
					<div className="userpost-main-text">
						{post.content ?? "Content"}
					</div>
					{user && (
						<div className="userpost-reply-container">
							<InvisButton>
								<h6 className="nomargin pad">Reply</h6>
							</InvisButton>

							<TextArea
								onChange={(e) => {
									onChange(e);
								}}
								name="content"
							/>
							<div className="userpost-reply-footer">
								<Button
									onClick={() => {
										reply();
									}}
								>
									Reply
								</Button>
							</div>
						</div>
					)}

					<h5>Comments</h5>

					<div className="userpost-comment-container">{comments}</div>
				</div>
			</div>
		</div>
	);
}

export default UserPost;
