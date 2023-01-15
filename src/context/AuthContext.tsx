import { createContext, useState } from "react";
import { defaultUser } from "../models/defaults";
import UserModel from "../models/UserModel";
import useAxios from "../hooks/useAxios";
import { useContext, useEffect } from "react";

export const AuthContext = createContext({
	login: (email: string, password: string) => {},
	logout: () => {},
	userToken: "",
	setUserToken: (token: string) => {},
	user: defaultUser,
	setUser: (user: UserModel) => {},
	getUser: () => {},
	error: "",
	setError: (error: string) => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: any }) => {
	const [userToken, setUserToken] = useState("");
	const [user, setUser] = useState<UserModel | null>(null);
	const [error, setError] = useState<string>("");
	const { axios } = useAxios();

	// ! Login function
	// ? POST request to path /login
	// ? Sets the token in the local storage of the browser
	// ? Maybe works, maybe not
	const login = (email: string, password: string) => {
		setUser(defaultUser);
		setError("");
		axios({
			method: "POST",
			url: "/login",
			data: { email: email, password: password },
		})
			.then((response) => {
				setUser(response.data);
				localStorage.setItem(
					"token",
					JSON.stringify(response.data.token)
				);
				localStorage.setItem("user", JSON.stringify(response.data));
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		setUser(null);
		setUserToken("");
	};

	const getUser = () => {
		setUser(JSON.parse(localStorage.getItem("user")!));
		return JSON.parse(localStorage.getItem("user")!);
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				login: login,
				logout: logout,
				userToken: userToken,
				setUserToken: setUserToken,
				user: user,
				setUser: setUser,
				getUser: getUser,
				error: error,
				setError: setError,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
