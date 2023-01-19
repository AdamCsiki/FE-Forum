import "./_reset.css";
import "./Root.css";
import "./type-scale.css";
import "./App.css";
import "./components/SearchBar/SearchBar.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./components/Header/Header";
import AppNav from "./routes/appnav";

function App() {
	return (
		<AuthContextProvider>
			<div className="App">
				<Router>
					<Header />
					<AppNav />
				</Router>
			</div>
		</AuthContextProvider>
	);
}

export default App;
