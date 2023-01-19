import "./CreatePost.css";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import PostModel from "../../models/PostModel";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import { useAuth } from "../../context/AuthContext";
import UserModel from "../../models/UserModel";
import store from "../../context/store";
import { defaultPost } from "../../models/defaults";

function CreatePost({
	isShown,
	setIsShown,
}: {
	isShown: boolean;
	setIsShown: Dispatch<SetStateAction<boolean>>;
}) {
	const user = store.getState().user;

	const navigate = useNavigate();

	const { axios } = useAxios();
	const [post, setPost] = useState<PostModel>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const [formData, setFormData] = useState({ defaultPost, userId: 1 });

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		axios({ url: "/posts", method: "POST", data: formData })
			.then((response) => {
				console.log(response.data);
				navigate(`/post/${response.data.id}`);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	if (!isShown || !user) {
		return <></>;
	}

	return (
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
					onChange={(e: any) => {
						handleChange(e);
					}}
				/>
				<TextArea
					name={"content"}
					onChange={(e: any) => {
						handleChange(e);
					}}
					placeholder={"Write what you wish"}
				/>
				{error && (
					<span className="error-message center nomargin bg-blur round pad">
						{error}
					</span>
				)}
				<Button id="forum-close-button">Create</Button>
			</div>
		</form>
	);
}

export default CreatePost;
