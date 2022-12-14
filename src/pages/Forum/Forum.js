import "./Forum.css";
import Post from "../../components/Post/Post";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import axios from "../../api/base";
import post from "../../models/post";
import useAxios from "../../hookers/useAxios";

function Forum() {
	const [isShown, setIsShown] = useState(false);
	const [postsResponse, error, loading, fetchData] = useAxios();
	const [formData, setFormData] = useState({ ...post, userId: 1 });

	const [postList, setPostList] = useState([]);

	const handlePosts = async () => {
		await fetchData("/posts", "GET");
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	// USE EFFECTS

	useEffect(() => {
		handlePosts();
	}, []);

	useEffect(() => {
		let i = 0;
		let tempList = [];

		postsResponse?.forEach((obj) => {
			tempList.push(
				<Post
					key={i++}
					title={obj.title}
					author={obj.userId}
				/>
			);
		});

		setPostList(tempList);
	}, [postsResponse]);

	return (
		<div className="Forum">
			<div className="forum-create-post">
				<Button
					id="forum-create-button"
					onClick={() => {
						setIsShown(!isShown);
					}}
				>
					Create Post
				</Button>
				<span className="error-message">{error?.message}</span>
				{isShown ? (
					<form
						className="forum-create-post-float"
						onSubmit={(e) => handleSubmit(e)}
					>
						<div className="forum-create-post-header">
							<h5 className="center nomargin">Create a post</h5>
							<Button
								id="forum-close-button"
								onClick={() => {
									setIsShown(!isShown);
								}}
							>
								X
							</Button>
						</div>
						<div className="forum-create-post-body">
							<Input
								style={{ width: "fit-content" }}
								name={"title"}
								placeholder={"Title"}
							/>
							<TextArea
								name={"title"}
								onChange={(e) => {
									handleChange(e);
								}}
							/>
							<span className="error-message center nomargin bg-blur round pad">
								{error}
							</span>
							<Button id="forum-close-button">Create</Button>
						</div>
					</form>
				) : undefined}
			</div>
			<div className="Posts">{postList}</div>
		</div>
	);
}

export default Forum;
