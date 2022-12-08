import "./_reset.css";
import "./Root.css";
import "./type-scale.css";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import library from "./misc/Icons"; // eslint-disable-line
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
<<<<<<< Updated upstream
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/Login"
                        element={<LoginPage />}
                    />
                    <Route
                        path="*"
                        element={
                            <>
                                <div className="not-found-page">
                                    <h2>404 Not found</h2>
                                </div>
                                <Navigate to={"/login"} />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
=======
	const cards = useRef(true);

	return (
		<AuthProvider>
			<div className="App">
				{cards && <Canvas active={cards} />}
				<Router>
					<Header switchRef={cards} />

					<div className="app-main">
						<Routes>
							<Route
								path="/"
								element={<Forum />}
							/>
							<Route
								path="/login"
								element={<Login />}
							/>
							<Route
								path="/register"
								element={<Register />}
							/>
							<Route
								path="/author"
								element={<div>Author page wip</div>}
							/>
							<Route path="/forum">
								<Route
									index
									element={<Forum />}
								/>
								<Route
									path="search=:searchquery"
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
>>>>>>> Stashed changes
}

export default App;
