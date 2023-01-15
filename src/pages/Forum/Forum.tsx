import "./Forum.css";
import ForumPost from "../../components/ForumPost/ForumPost";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import axios from "../../api/base";
import PostModel from "../../models/PostModel";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import CreatePost from "../../components/CreatePost/CreatePost";
import { useAuth } from "../../context/AuthContext";

function Forum() {
	const { user, getUser } = useAuth();

	const {
		response: postsResponse,
		error: pError,
		loading: pLoading,
		fetchData: pFetchData,
	} = useAxios();

	const [isShown, setIsShown] = useState(false);

	const [postList, setPostList] = useState([]);

	const handlePosts = async () => {
		await pFetchData("/posts", "GET");
	};

	useEffect(() => {
		handlePosts();
	}, []);

	useEffect(() => {
		let i = 0;
		let tempList: any = [];
		postsResponse?.forEach((obj: PostModel) => {
			tempList.push(
				<ForumPost
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
			<div className="forum-header">
				{user && (
					<Button
						id="forum-create-button"
						onClick={() => {
							setIsShown(!isShown);
						}}
					>
						Create Post
					</Button>
				)}
			</div>
			<CreatePost
				isShown={isShown}
				setIsShown={setIsShown}
			/>
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
					<h5 className="error-message center blur nomargin">
						{pError}
					</h5>
					<div
						className="Posts"
						style={{ overflow: isShown ? "hidden" : "visible" }}
					>
						{postList}
					</div>
				</>
			)}
		</div>
	);
}

export default Forum;
