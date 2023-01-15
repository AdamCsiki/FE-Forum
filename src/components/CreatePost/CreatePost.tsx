import "./CreatePost.css";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import PostModel from "../../models/PostModel";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import { useAuth } from "../../context/AuthContext";

function CreatePost({
	isShown,
	setIsShown,
}: {
	isShown: boolean;
	setIsShown: Dispatch<SetStateAction<boolean>>;
}) {
	const { user, getUser } = useAuth();

	const navigate = useNavigate();

	const { response, error, loading, fetchData } = useAxios();

	const emptyPost: PostModel = {
		id: 0,
		userId: 0,
		title: "",
		karma: 0,
		content: "",
	};
	const [formData, setFormData] = useState({ emptyPost, userId: 1 });

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		fetchData("/posts", "POST", formData);
		navigate("/forum");
	};

	useEffect(() => {
		getUser();
	});

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
				/>
				<TextArea
					name={"title"}
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
