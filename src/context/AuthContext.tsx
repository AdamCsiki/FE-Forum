import { createContext, useState, Dispatch, useReducer } from "react";
import { defaultUser } from "../models/defaults";
import UserModel from "../models/UserModel";
import useAxios from "../hooks/useAxios";
import { useContext, useEffect } from "react";
import store from "./store";

export const AuthContext = createContext({
	login: (email: string, password: string) => {},
	logout: () => {},
	userToken: "",
	setUserToken: (token: string) => {},
	error: "",
	setError: (error: string) => {},
	updateUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: any }) => {
	const [userToken, setUserToken] = useState("");
	const [error, setError] = useState<string>("");
	const { axios } = useAxios();

	// ! Login function
	// ? POST request to path /login
	// ? Sets the token in the local storage of the browser
	// ? Maybe works, maybe not
	const login = (email: string, password: string) => {
		setError("");
		axios({
			method: "POST",
			url: "/login",
			data: { email: email, password: password },
		})
			.then((response) => {
				localStorage.setItem("user", JSON.stringify(response.data));
				const user: UserModel = response.data;
				store.setState({ user: user });
			})
			.catch((error) => {
				console.log(error.message);
				setError(error.message);
			});
	};

	const logout = () => {
		localStorage.removeItem("user");
		store.getState().removeUser();
	};

	const updateUser = () => {
		if (!store.getState().user) {
			return;
		}
		axios({
			url: `/users/${store.getState().user?.id}`,
			method: "GET",
		}).then((response) => {
			store.setState({ user: response.data });
		});
	};

	useEffect(() => {
		updateUser();
	});

	return (
		<AuthContext.Provider
			value={{
				login: login,
				logout: logout,
				userToken: userToken,
				setUserToken: setUserToken,
				error: error,
				setError: setError,
				updateUser: updateUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
