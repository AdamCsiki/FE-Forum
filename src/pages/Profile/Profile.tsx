import "./Profile.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import store from "../../context/store";
import InvisButton from "../../components/InvisButton/InvisButton";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/Loading/Loading";
import UserModel from "../../models/UserModel";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import UserPost from "../Post/Post";
import ForumPost from "../../components/ForumPost/ForumPost";
import PostModel from "../../models/PostModel";

function Profile() {
	const { updateUser } = useAuth();
	const params = useParams();

	const [user, setUser] = useState<UserModel | null>(null);
	const [userPosts, setUserPosts] = useState<any>([]);
	const navigate = useNavigate();

	const [userPicture, setUserPicture] = useState(user?.pfp_url);
	const [userHeader, setUserHeader] = useState(user?.header_url);
	const [userName, setUserName] = useState(user?.username);
	const [edit, setEdit] = useState(false);

	const [loading, setLoading] = useState(false);

	const [isCurrentUser, setIsCurrentUser] = useState(false);

	const { axios } = useAxios();
	const [formData, setFormData] = useState({
		pfp_url: "",
		username: "",
		header_url: "",
	});

	const getUser = () => {
		axios({ url: `/users/${params.id}`, method: "GET" })
			.then((response) => {
				document.title = response.data.username;
				setUser(response.data);
				setIsCurrentUser(
					response.data.id === store.getState().user?.id
				);
				setFormData({
					pfp_url: response.data.pfp_url,
					header_url: response.data.header_url,
					username: response.data.username,
				});
			})
			.catch((err) => {
				console.log(err.message);
				navigate(`/`);
			});
	};

	const editProfile = () => {
		setLoading(true);
		axios({
			url: `/users`,
			method: "PUT",
			data: { ...user, ...formData },
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err.msg);
			})
			.finally(() => {
				setLoading(false);
				getUser();
			});
	};

	const onChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormData({ ...formData, [name]: value });
	};

	const getUserPosts = () => {
		axios({
			url: `/posts/user/${params.id}`,
			method: "GET",
		})
			.then((response) => {
				setUserPosts(
					response.data.map((post: PostModel) => {
						return (
							<ForumPost
								post={post}
								postId={post.id}
							/>
						);
					})
				);
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {
				setLoading(false);
				updateUser();
			});
	};

	useEffect(() => {
		getUser();
		getUserPosts();
	}, []);

	return (
		<div className="Profile">
			{loading && <Loading style={{ position: "absolute" }} />}
			{edit && (
				<div className="ProfileEdit">
					<Button
						id="profile-edit-close-button"
						onClick={() => {
							setEdit(!edit);
						}}
					>
						X
					</Button>
					<h5 className="nomargin">Edit Profile</h5>
					<h6 className="nomargin">Profile</h6>
					<Input
						name="pfp_url"
						placeholder="Profile url"
						onChange={(e) => {
							onChange(e);
						}}
					/>
					<h6 className="nomargin">Header</h6>
					<Input
						name="header_url"
						placeholder="Header url"
						onChange={(e) => {
							onChange(e);
						}}
					/>
					<h6 className="nomargin">Username</h6>
					<Input
						name="username"
						placeholder="Username"
						onChange={(e) => {
							onChange(e);
						}}
					/>
					<Button
						id="profile-edit-save-button"
						onClick={() => {
							editProfile();
							setEdit(!edit);
						}}
					>
						Save
					</Button>
				</div>
			)}
			<div className="profile-header">
				{isCurrentUser ? (
					<InvisButton
						style={{ width: "100%", height: "100%" }}
						onClick={() => {
							setEdit(!edit);
						}}
					>
						<img
							className="profile-header-image"
							src={user?.header_url}
							alt={`${user?.username}'s header`}
						/>
					</InvisButton>
				) : (
					<img
						className="profile-header-image"
						src={user?.header_url}
						alt={`${user?.username}'s header`}
					/>
				)}
			</div>
			<div className="profile-user-picture-container">
				{isCurrentUser ? (
					<InvisButton
						style={{ width: "100%", height: "100%" }}
						onClick={() => {
							setEdit(!edit);
						}}
					>
						<img
							className="profile-user-picture"
							src={user?.pfp_url}
							alt={`${user?.username}'s profile`}
						/>
					</InvisButton>
				) : (
					<img
						className="profile-user-picture"
						src={user?.pfp_url}
						alt={`${user?.username}'s profile`}
					/>
				)}
				<div className="profile-user-username">
					{isCurrentUser ? (
						<InvisButton
							onClick={() => {
								setEdit(!edit);
							}}
						>
							<h4 className="nomargin">{user?.username}</h4>
						</InvisButton>
					) : (
						<h4 className="nomargin">{user?.username}</h4>
					)}

					<h6 className="nomargin">Role: {user?.role}</h6>
				</div>
			</div>
			<div className="profile-user-posts">
				<h6>Posts</h6>
				{userPosts}
			</div>
		</div>
	);
}

export default Profile;
