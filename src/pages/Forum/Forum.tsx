import "./Forum.css";
import Post from "../../components/Post/Post";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import axios from "../../api/base";
import PostModel from "../../models/PostModel";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Forum() {
	const navigate = useNavigate();

	const {
		response: postsResponse,
		error: pError,
		loading: pLoading,
		fetchData: pFetchData,
	} = useAxios();
	const {
		response: createResponse,
		error: cError,
		loading: cLoading,
		fetchData: cFetchData,
	} = useAxios();

	const [isShown, setIsShown] = useState(false);
	const emptyPost: PostModel = {
		id: 0,
		title: "",
		userId: 0,
		karma: 0,
		content: "",
	};
	const [formData, setFormData] = useState({ emptyPost, userId: 1 });

	const [postList, setPostList] = useState([]);

	const handlePosts = async () => {
		await pFetchData("/posts", "GET");
	};

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		cFetchData("/posts", "POST", formData);
		console.log(createResponse);
		navigate("/forum");
	};

	useEffect(() => {
		handlePosts();
	}, []);

	useEffect(() => {
		let i = 0;
		let tempList: any = [];
		postsResponse?.forEach((obj: PostModel) => {
			tempList.push(
				<Post
					key={i++}
					postId={obj.id}
					post={obj}
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
								onChange={(e: any) => {
									handleChange(e);
								}}
								placeholder={"Write what you wish"}
							/>
							<span className="error-message center nomargin bg-blur round pad">
								{pError}
							</span>
							<Button id="forum-close-button">Create</Button>
						</div>
					</form>
				) : undefined}
			</div>
			{pLoading && (
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Loading />
				</div>
			)}
			{!pLoading && (
				<>
					<h5 className="error-message center blur">{pError}</h5>
					<div className="Posts">{postList}</div>
				</>
			)}
		</div>
	);
}

export default Forum;
