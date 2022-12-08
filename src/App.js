import "./_reset.css";
import "./Root.css";
import "./type-scale.css";
import "./App.css";
import "./components/SearchBar/SearchBar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Forum from "./pages/Forum/Forum";
import UserPost from "./pages/UserPost/UserPost";
import Canvas from "./components/Canvas/Canvas";
import { useRef } from "react";

function App() {
	const cards = useRef(false);

	return (
		<AuthProvider>
			<div className="App">
				<Canvas active={cards} />
				<Router>
					<Header switchRef={cards} />

					<div className="app-main">
						<Routes>
							<Route
								path="/login"
								element={<Login />}
							/>
							<Route
								path="/register"
								element={<Register />}
							/>
							<Route path="/">
								<Route
									index
									element={<Forum />}
								/>
								<Route
									path=":gametitle"
									element={<Forum />}
								>
									<Route
										index
										element={<Forum />}
									/>
									<Route
										path=":posttitle"
										element={<UserPost />}
									/>
								</Route>
							</Route>
							<Route
								path="/canvas"
								element={<Canvas />}
							/>
							<Route
								path="*"
								element={
									<>
										<div className="not-found-page">
											<h2>404 Not found</h2>
										</div>
									</>
								}
							/>
						</Routes>
					</div>
				</Router>
			</div>
		</AuthProvider>
	);
}

export default App;
