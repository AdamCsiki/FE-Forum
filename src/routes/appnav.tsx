import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Forum from "../pages/Forum/Forum";
import Post from "../pages/Post/Post";
import Canvas from "../pages/Canvas/Canvas";
import Profile from "../pages/Profile/Profile";

function AppNav() {
	return (
		<div className="app-main">
			<Routes>
				<Route path="/">
					<Route
						index
						element={<Forum />}
					/>
					<Route path="post">
						<Route
							path=":postid"
							element={<Post />}
						/>
					</Route>
				</Route>
				<Route path="/user">
					<Route
						index
						path="profile"
						element={<Profile />}
					/>
					<Route
						index
						path="login"
						element={<Login />}
					/>
					<Route
						path="register"
						element={<Register />}
					/>
				</Route>
				<Route
					path="/canvas"
					element={<Canvas />}
				/>
				<Route
					path="/*"
					element={
						<div className="not-found-page">
							<h2>404 Not found</h2>
						</div>
					}
				/>
			</Routes>
		</div>
	);
}

export default AppNav;
