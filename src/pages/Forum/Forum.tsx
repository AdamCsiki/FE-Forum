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
import UserModel from "../../models/UserModel";
import store from "../../context/store";

function Forum() {
	document.title = "Forum";
	const user = store.getState().user;

	const { axios } = useAxios();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const [isShown, setIsShown] = useState(false);
	const [refreshLocked, setRefreshLocked] = useState(false);

	const [postList, setPostList] = useState([]);

	const handlePosts = async () => {
		setError("");
		setLoading(true);
		axios({ url: "/posts", method: "GET" })
			.then((response) => {
				let i = 0;
				let tempList: any = [];
				response?.data.forEach((obj: PostModel) => {
					tempList.push(
						<ForumPost
							key={i++}
							postId={obj.id}
							post={obj}
						/>
					);
				});

				setPostList(tempList);
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
			})
			.finally(() => {
				setLoading(false);
				setRefreshLocked(false);
			});
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		handlePosts();
	}, []);

	return (
		<div className="Forum">
			<div className="forum-scroll-button-container">
				<Button
					id="forum-scroll-button"
					onClick={scrollToTop}
				>
					<h4 className="nomargin">^</h4>
				</Button>
			</div>
			<div className="forum-header">
				<Button
					style={{ width: "fit-content" }}
					onClick={() => {
						setRefreshLocked(true);
						handlePosts();
					}}
					disabled={refreshLocked}
				>
					Refresh
				</Button>
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
			{loading && (
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
			{!loading && (
				<>
					{error && (
						<h5 className="error-message center blur">{error}</h5>
					)}
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
