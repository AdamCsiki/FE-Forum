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
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
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
