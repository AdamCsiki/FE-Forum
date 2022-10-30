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
}

export default App;
