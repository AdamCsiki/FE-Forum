import UserModel from "./UserModel";
import PostModel from "./PostModel";
import CommentModel from "./CommentModel";
import RegisterModel from "./RegisterModel";

export const defaultUser: UserModel | null = {
	id: 0,
	role: "ROLE_USER",
	karma: 0,
	description: "",
	username: "",
	date_of_creation: new Date(),
	password: "",
	pfp_url: "",
	header_url: "",
};

export const defaultPost: PostModel | null = {
	id: 0,
	userId: 0,
	karma: 0,
	title: "",
	content: "",
};

export const defaultComment: CommentModel | null = {
	id: 0,
	content: "",
	parentId: 0,
	postId: 0,
	userId: 0,
};

export const defaultRegister: RegisterModel = {
	id: 0,
	role: "ROLE_USER",
	karma: 0,
	description: "",
	username: "",
	date_of_creation: new Date(),
	email: "",
	password: "",
	pfp_url: "",
	header_url: "",
};
