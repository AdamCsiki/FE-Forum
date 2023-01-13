type UserModel = {
	id: number;
	role: string;
	karma: number;
	description: string;
	username: string;
	date_of_creation: Date;
	password: string;
	pfp_url: string;
	header_url: string;
};

export default UserModel;
