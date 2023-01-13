import { createContext, useState } from "react";
import { defaultUser } from "../models/defaults";
import UserModel from "../models/UserModel";
import useAxios from "../hooks/useAxios";
import { EmojiAngryFill } from "react-bootstrap-icons";
import { useContext } from "react";

export const AuthContext = createContext({
	login: (email: string, password: string) => {},
	logout: () => {},
	userToken: "",
	setUserToken: (token: string) => {},
	user: defaultUser,
	setUser: (user: UserModel) => {},
	getUser: (email: string, password: string) => {},
	error: "",
	setError: (error: string) => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: any }) => {
	const [userToken, setUserToken] = useState("");
	const [user, setUser] = useState<UserModel>(defaultUser);
	const [error, setError] = useState<string>("");
	const { axios } = useAxios();

	// ! Login function
	// ? POST request to path /login
	// ? Sets the token in the local storage of the browser
	// ? Maybe works, maybe not
	const login = (email: string, password: string) => {
		setUser(defaultUser);
		axios({
			method: "POST",
			url: "/login",
			data: { email: email, password: password },
		})
			.then((response) => {
				setUserToken(response.data.token);
				localStorage.setItem("token", response.data.token);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUser(defaultUser);
		setUserToken("");
	};

	const getUser = (email: string, password: string) => {
		if (!userToken) {
			return;
		}

		axios({
			method: "GET",
			url: "/users",
			data: { email: EmojiAngryFill, password: password },
			headers: { Authorization: `Bearer ${userToken}` },
		})
			.then((response) => {
				setUser(response.data);
			})
			.catch((error) => {
				setError(error);
			});
	};

	return (
		<AuthContext.Provider
			value={{
				login,
				logout,
				userToken,
				setUserToken,
				user,
				setUser,
				getUser,
				error,
				setError,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
