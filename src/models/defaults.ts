import UserModel from "./UserModel";

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
