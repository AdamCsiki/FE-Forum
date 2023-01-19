import { create } from "zustand";
import UserModel from "../models/UserModel";

interface UserState {
	user: UserModel | null;
	putUser: (user: UserModel) => void;
	removeUser: () => void;
	token: string | null;
	putToken: (token: string) => void;
	removeToken: () => void;
}

const store = create<UserState>((set) => ({
	user: null || JSON.parse(localStorage.getItem("user")!),
	putUser: (user: UserModel) => set(() => ({ user: user })),
	removeUser: () => set(() => ({ user: null })),
	token: null,
	putToken: (token: string) => set(() => ({ token: token })),
	removeToken: () => set(() => ({ token: null })),
}));

export default store;
