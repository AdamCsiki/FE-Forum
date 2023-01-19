type RegisterModel = {
	id: number;
	role: string;
	karma: number;
	description: string;
	username: string;
	date_of_creation: Date;
	email: string;
	password: string;
	pfp_url: string;
	header_url: string;
};

export default RegisterModel;
