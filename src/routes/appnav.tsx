import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/Login";
import RegisterPage from "../pages/Register/RegisterPage";
import Forum from "../pages/Forum/Forum";
import UserPost from "../pages/UserPost/UserPost";
import Canvas from "../pages/Canvas/Canvas";

function AppNav() {
	return (
		<div className="app-main">
			<Routes>
				<Route
					path="/login"
					element={<LoginPage />}
				/>
				<Route
					path="/register"
					element={<RegisterPage />}
				/>
				<Route path="/">
					<Route
						index
						element={<Forum />}
					/>
					<Route
						path=":posttitle"
						element={<UserPost />}
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
